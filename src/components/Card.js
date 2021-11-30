import { apply } from 'file-loader';
import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import "../app.css"

const Card = () => {
    const [data, setData] = useState([{ text: "Loading..." }])
    const [isFlipped, setIsFlipped] = useState(new Set())

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

    useEffect(() => {


    }, [])

    function handleClick(id) {
        console.log("Handle Click ", id)
        return (e) => {
            e.preventDefault();
            let flipped = new Set(isFlipped);
            if (flipped.has(id)) {
                flipped.delete(id);
            } else {
                flipped.add(id);
            }
            setIsFlipped(flipped);
        };
    }

    const renderButtons = () => {
        return range(25).map(number => {
            return <ReactCardFlip isFlipped={isFlipped.has(number)} flipDirection="horizontal">
                <button className="card" onClick={handleClick(number)}>{number}
                </button>
                <button className="card" onClick={handleClick(number)}> {data[number]?.text}</button>
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
