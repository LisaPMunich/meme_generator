import React, {useState} from 'react'
import memesData from '../../memesdata.js'
import './meme.css'


export default function Meme(){

    const [image, setImage] = useState({
        randomImage: "http://i.imgflip.com/1bij.jpg",
        topText:"",
        bottomText:""
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)


    function handleServeMeme(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        /**  */
        const url = memesArray[randomNumber].url
        setImage(prevImage => ({
            ...prevImage,
            randomImage: url
        }))
    }

    function handleChange(event){
        const{name, value} = event.target
        setImage(prevImage =>({
            ...prevImage,
            [name]: value,
        }))
    }

    return(
        <main>
            <div className="form">
                <input className="form--input"
                       type="text"
                       placeholder="top text"
                       name="topText"
                       value={image.topText}
                       onChange={handleChange}
                />
                <input className="form--input"
                       type="text"
                       placeholder="bottom text"
                       name="bottomText"
                       value={image.bottomText}
                       onChange={handleChange}
                />
                <button
                    onClick={handleServeMeme}
                    className="form--button"
                    type="submit">
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img className="meme--image" src={image.randomImage}/>
                <h2 className="meme--text top">{image.topText}</h2>
                <h2 className="meme--text bottom">{image.bottomText}</h2>
            </div>
        </main>
    )
}