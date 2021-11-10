import React, { useState } from 'react'

const ChatMessages = ({ messages }) => {
  //const [date, setDate] = useState('')

  return (
    <div className='container'>
      <div className='overflow-scroll'>
        {messages.length > 0 &&
          messages.map((item) => {
            return (
              <div className='card w-75 my-3' key={item._id}>
                <div className='card-body'>
                  <h6 className='card-subtitle opacity-50'>
                    user : {item.author}
                  </h6>

                  <p className='card-text'>{item.message}</p>
                  <h6 className='card-subtitle opacity-50'>
                    date :{new Date(item.timestamp).toLocaleDateString('en-GB')}
                  </h6>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default ChatMessages
