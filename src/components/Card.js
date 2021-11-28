import { apply } from 'file-loader'
import React, { useEffect, useState } from 'react'
var Snow = require('react-snow-effect')
import ReactCardFlip from 'react-card-flip'
import '../app.css'

const Card = () => {
    const [data, setData] = useState([{ text: 'Loading...' }])
    const [isFlipped, setIsFlipped] = React.useState(false)

    useEffect(() => {
        fetch('https://rawgit.com/elijahmanor/cyberpun/master/jokes.json')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    const range = (upTo) => {
        let array = []
        for (let i = 1; i < upTo; i++) {
            array.push(i)
        }
        return array
    }

    const renderButtons = () => {
        return range(25).map((number) => {
            console.log(number)
            return (
                <>
                    <ReactCardFlip
                        isFlipped={isFlipped}
                        flipDirection="horizontal"
                    >
                        <button
                            className="card mountains-of-christmas"
                            onMouseEnter={() => setIsFlipped((prev) => !prev)}
                        >
                            {number}
                        </button>
                        <button
                            className="card"
                            onMouseLeave={() => setIsFlipped((prev) => !prev)}
                        >
                            {' '}
                            {data[number]?.text}
                        </button>
                    </ReactCardFlip>
                </>
            )
        })
    }

    return (
        <>
            <div className="background">{renderButtons()}</div>
            <div>
                <Snow />
            </div>
        </>
    )
}

export default Card
