import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="contact">
        <div className="container">
            <h2 className="font-playfair text-4xl font-clash-regular split-text line-height-base"><span className="text-4xl font-clash-bold accent-100 line-height-base">C</span>ONTACT</h2>
            <hr />
            <p className="text-lg font-clash-regular">Reach out and let’s make something awesome together.</p>
            <form>
                <div className="form-row">
                    <input className="text-lg font-clash-regular" type="text" placeholder="Your name" />
                    <input className="text-lg font-clash-regular" type="email" placeholder="Your email" />
                </div>
                <textarea className="text-lg font-clash-regular" placeholder="Your message" rows="1"></textarea>
                <button className="font-clash text-lg font-clash-regular" type="submit">Send</button>
            </form>
        </div>
    </section>
  )
}

export default Contact