import React from 'react'
import memesData from '../../memesdata.js'
import './meme.css'

/**
 * Challenge: Get a random image from the `memesData` array
 * when the "new meme image" button is clicked.
 *
 * Log the URL of the image to the console. (Don't worry
 * about displaying the image yet)
 */

export default function Meme(){

    const [image, setImage] = React.useState("")

    function handleServeMeme(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setImage(url)
    }

    return(
        <main>
            <div className="form">
                <input className="form--input"
                       type="text"
                       placeholder="top-text"/>
                <input className="form--input"
                       type="text"
                       placeholder="buttom-text"/>
                <button
                    onClick={handleServeMeme}
                    className="form--button"
                    type="submit">
                    Get a new meme image
                </button>
            </div>
            <img className="image" src={image} alt="meme image"
                />
        </main>
    )
}