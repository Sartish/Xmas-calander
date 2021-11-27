import { apply } from 'file-loader';
import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import "../app.css"

const Card = () => {
    const [data, setData] = useState([{ text: "Loading..." }])
    const [isFlipped, setIsFlipped] = useState(false)

    useEffect(() => {
        fetch('https://rawgit.com/elijahmanor/cyberpun/master/jokes.json')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    const range = (upTo) => {
        let array = [];
        for (let i = 1; i < upTo; i++) {
            array.push(i)
        }
        return array
    }

    const handleClick = () => {
        setIsFlipped(!isFlipped)

    }

    const renderButtons = () => {
        return range(25).map(number => {
            console.log(number)
            return <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <button className="card" onClick={handleClick}>{number}
                </button>
                <button className="card" onClick={handleClick}> {data[number]?.text}</button>
            </ReactCardFlip>
        })
    }

    return (
        <div className="background">
            {renderButtons()}
        </div>
    )
}

export default Card
