import React, { Component } from 'react'
import './ProfilePhoto.css';

export default class ProfilePhoto extends Component {
    render() {
    return (
        <div className='picture'>
            <div className="box">
                <img src={"image.jpg"} height={180} width={180} alt="profil_picture" />
            </div>
        </div>
    )
}

}
