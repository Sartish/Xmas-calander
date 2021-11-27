import { apply } from 'file-loader'
import React, { useEffect, useState } from 'react'
var Snow = require('react-snow-effect')
import '../app.css'

const Card = () => {
    const [data, setData] = useState([{ text: 'Loading...' }])

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
                    <button className="card">{number}</button>
                    <button className="card"> {data[number]?.text}</button>
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
