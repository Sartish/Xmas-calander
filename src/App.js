import React from "react"
import Card from "./components/Card"

export function App() {
    return (
        <div>
            <h1>Hello there</h1>
            <h1> Welcome {new Date().toString()}</h1>
            <Card />
        </div>
    )
}