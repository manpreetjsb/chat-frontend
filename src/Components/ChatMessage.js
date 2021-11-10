import React, { useRef, useEffect } from 'react'

const ChatMessages = ({ messages }) => {
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(scrollToBottom, [messages])

  return (
    <>
      <div className='container mb-5'>
        <div className='overflow-hidden'>
          {messages &&
            messages.map((item) => {
              return (
                <div
                  className={`card w-75 my-3 ${
                    item.author === 'me'
                      ? 'float-end bg-light-yello'
                      : 'float-start bg-white'
                  }`}
                  key={item._id}
                >
                  <div className='card-body'>
                    <h6 className='card-subtitle opacity-50'>
                      user : {item.author}
                    </h6>

                    <p className='card-text'>{item.message}</p>
                    <h6 className='card-subtitle opacity-50'>
                      {new Date(item.timestamp).toLocaleDateString(['en-GB'], {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </h6>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
      <div ref={messagesEndRef} />
    </>
  )
}

export default ChatMessages
