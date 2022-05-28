import React, {useState, useEffect} from 'react'
import './meme.css'


export default function Meme(){

    const [image, setImage] = useState({
        randomImage: "http://i.imgflip.com/1bij.jpg",
        topText:"",
        bottomText:""
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleServeMeme(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
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