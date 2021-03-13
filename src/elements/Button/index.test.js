import React from 'react'
import {render} from '@testing-library/react';
import Button from "./index"
// export default function index() {
//     return (
//         <div>
            
//         </div>
//     )
// }

test("should not allowed click button",()=>{
    const {container}=render(<Button isDisabled></Button>)
    expect(container.querySelector('span.disabled')).toBeInTheDocument()
})
