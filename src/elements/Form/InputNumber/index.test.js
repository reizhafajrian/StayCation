import React, { Component } from 'react'

export default class TestInput extends Component {
    state={
        value:""
    }

    handleChange=e=>{
        this.setState({value:e.target.value})
    }


    render() {
        return (
            <Number
            max={30}
            name="value"
            onChange={this.handleChange}
            value={this.state.value}
            />
        )
    }
}

const setup=()=>{
 const {container}=render(<Number/>)
 const input =container.querySelector(`input.form-control[name='value]`)

 return input
}
