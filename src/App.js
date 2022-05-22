import React from "react"
import Navbar from './components/Navbar/navbar'
import Meme from './components/Meme/meme'


/**
 * Challenge:
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */
export default function App() {
  return (
      <div className="app">
        <Navbar/>
          <Meme/>

      </div>
  )
}
