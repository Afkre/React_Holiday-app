import React from 'react'
import Card from '../Card/Card'
import { data } from '../helpers/data'

import './Cards.css'

function Cards() {
    return (
        <div className='card-container'>
            {
                data.map(obj => {
                    return (
                        <Card
                        title= {obj.title}
                        image= {obj.image}
                        desc  ={obj.desc}
                    />
                    )
                    
                })
            }
            
        </div>)
}

export {Cards};