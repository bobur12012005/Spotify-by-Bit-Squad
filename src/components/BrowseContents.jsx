import React from 'react'

function getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function BrowseContents({ item }) {
    const backgroundColor = getRandomColor()

    return (
        <div className="content" style={{ backgroundColor }}>
            <span>{item.topic}</span>
            <img src={item.image} alt={item.topic} />
        </div>
    )
}

export default BrowseContents