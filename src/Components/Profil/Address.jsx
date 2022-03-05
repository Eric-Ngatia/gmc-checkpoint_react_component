import React, { Component } from 'react'
import './Address.css'

export default class Address extends Component {
    render() {
    return (
    <div className='adresse'>
        <div class="mb-3">
                <label  class="form-label">Address</label>
                <input type="text" class="form-control"  readOnly value={"Riviera M'Badon/ ABIDJAN"} />
            </div>
    </div>
    )
}

}
