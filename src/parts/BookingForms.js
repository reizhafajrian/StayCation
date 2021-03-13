import Button from "elements/Button";
import InputDate from "elements/Form/InputDate";
import Number from "elements/Form/InputNumber";
import propTypes from "prop-types";
import React, { Component } from "react";

export default class BookingForms extends Component {
  state = {
    data: {
      duration: 1,
      date: {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    },
  };

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      }
    });

  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;
    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }
    if (prevState.data.duration !== data.duration) {
      console.log('durasi')
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
      console.log(this.state.data.duration)
    }
  
  }

  render() {
    
    const { data } = this.state;
    console.log(data.duration)
    const { itemDetails, startBooking } = this.props;
    return (
      <div className="card bordered" style={{ padding: "60px 80px" }}>
        <h4 className="mb-3">Start Booking</h4>
        <h5 className="h2 text-teal mb-4">
          {itemDetails.price}{" "}
          <span className="text-gray-500 font-weight-light">
            per {itemDetails.unit}
          </span>
        </h5>
        <label htmlFor="duration">How long will u stay</label>
        <Number
          max={30}
          suffix={" night"}
          isSuffixPlural
          onChange={this.updateData}
          name="duration"
          value={data.duration}
        />

        <label htmlFor="date"> </label>
        <InputDate onChange={this.updateData} name="date" value={data.date} />
        <h6
          className="text-gray-500 font-weight-light"
          style={{ marginBottom: 40 }}
        >
          You will pay {" "}
          <span className="text-primary">
            {itemDetails.price * data.duration} USD
          </span>{" "}
          <span className="text-primary">
            {data.duration} { data.duration>1 ? `${itemDetails.unit+'s'}`  : itemDetails.unit}
          </span>{" "}
          
        </h6>
        <Button
        className="btn"
        hasShadow
        isPrimary
        isBlock
        onClick={startBooking}
        >Continue to Book</Button>
      </div>
    );
  }
}

BookingForms.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};
