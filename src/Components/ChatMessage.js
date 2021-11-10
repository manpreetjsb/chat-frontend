import React, { useState, useEffect } from 'react'

const ChatMessages = ({ messages }) => {
  return (
    // { messages.map((item) => (
    <div className='card w-75'>
      <div className='card-body'>
        <h6 className='card-subtitle opacity-50'>
          user : {messages[0].author}
        </h6>

        <p className='card-text'>{messages[0].message}</p>
        <h6 className='card-subtitle opacity-50'>date : {messages[0].date}</h6>
      </div>
    </div>
    // ))}
  )
}

export default ChatMessages
