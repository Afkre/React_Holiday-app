import React from 'react';
import'./Card.css'

export default function Card(props) {
    return (
        <div className='card'>
            <div className='title'>
                <h2>{props.title}</h2>
            </div>
            <img src={props.image} alt="" />
            <div className="card-over">
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

