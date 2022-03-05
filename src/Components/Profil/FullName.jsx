import React, { Component } from 'react'
import './FullName.css';

export default class FullName extends Component {
    render() {
    return (
        <div className='identity'>
            <div class="mb-3">
                <label  class="form-label">Last Name</label>
                <input type="text" class="form-control" id="formGroupExampleInput" readOnly value={"N'Gatia"} />
            </div>
            <div class="mb-3">
                <label  class="form-label">First Name</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" readOnly value={"Yao Eric Constant"} />
            </div>
        </div>
    )
}

}
