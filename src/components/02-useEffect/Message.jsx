/* eslint-disable react/jsx-indent */
/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react'

export const Message = () => {

    const [Coord, setCoord] = useState({ x: 0, y: 0 })

    const { x, y } = Coord

    useEffect(() => {
        const mousemove = (e) => {
            const coord = { x: e.x, y: e.y }
            setCoord(coord)
        }
        window.addEventListener('mousemove', mousemove)
        return () => {
            window.removeEventListener('mousemove', mousemove)
        }
    }, [])

    return (
        <div>
            <h3>Eres Genial</h3>
            <p>
                x: 
                {x}
                y: 
                {y}
            </p>
        </div>
    )
}
