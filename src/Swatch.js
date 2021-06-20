import React from 'react'

export default function Swatch(props) {
    const color = props.color;

    return (
        <div className="swatch" style={{
            backgroundColor: color.hex
        }}>
            <span className="hex">{color.hex}</span>
            <span className="delete-button" onClick={() => props.remove(color.name)}>&#x2716;</span>
            <span className="name">{color.name}</span>
        </div>
    )
}
