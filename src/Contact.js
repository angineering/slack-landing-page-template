import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="page">
        <h1>Contact</h1>

        <section>
          <h2>Support</h2>
          <p>
            If you have feedback, suggestions or issues with the Chatty Slack App,
            please email the Chatty team on <a href='mailto:help@bechatty.app'>help@bechatty.app</a>
          </p>
        </section>

        <section>
          <h2>Feedback</h2>
          <p>
            If you have feedback or suggestions for the Chatty Slack App,
            please email the Chatty team on <a href='mailto:hello@bechatty.app'>hello@bechatty.app</a>
          </p>
        </section>

      </div>
    )
  }
}
