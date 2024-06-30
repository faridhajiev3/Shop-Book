import React from 'react'

export default function News(props) {
    const { id, title, information, newsImg } = props.port
    return (
        <div className='select' key={id}>
            <div className='words'>
                <p className='names'>{title}</p>
                <p className='information'>{information}</p>
            </div>
            <img src={newsImg} alt="" />
        </div>
    )
}
