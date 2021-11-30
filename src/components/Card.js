
import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Snowfall from 'react-snowfall'
import "../app.css"
import swal from 'sweetalert2';

const Card = () => {
    const [data, setData] = useState([{ text: "Loading..." }])
    const [isFlipped, setIsFlipped] = useState(new Set())
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate()

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
            if (number <= day && month == 12) {
                return <ReactCardFlip isFlipped={isFlipped.has(number)} flipDirection="horizontal">
                    <button className="card" onClick={handleClick(number)}><h3>{number}</h3>
                    </button>
                    <button className="card" onClick={handleClick(number)}> <p>{data[number]?.text}</p>
                    </button>
                </ReactCardFlip>
            } else {
                return (
                    <ReactCardFlip isFlipped={isFlipped.has(number)} flipDirection="horizontal">
                        <button className="card" onClick={() => {
                            new swal({
                                text: 'Oh sneaky you! You you have to wait.',
                                button: 'ok',
                                imageUrl: 'https://media.giphy.com/media/D28t0Rto3daKI/giphy.gif'

                            });
                        }}><h3>{number}</h3>
                        </button>
                        <button className="card" onClick={handleClick(number)}> <p>{data[number]?.text}</p>
                        </button>
                    </ReactCardFlip>
                )

            }
        })
    }

    return (
        <div className="background">
            {renderButtons()}
            <Snowfall />
        </div>
    )
}

export default Card
