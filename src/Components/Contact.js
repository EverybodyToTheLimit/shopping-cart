import React from 'react'

export const Contact = ({text}) => {

    return (
        <div className="contact">
          <h2>Contact Us</h2>
          <p>Fill out the form below to contact us:</p>
          <form className="contact form">
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Message:
              <textarea name="message"></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}
