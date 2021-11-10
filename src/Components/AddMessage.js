import React, { useState } from 'react'
import axios from 'axios'

const AddMessage = ({ fetchMessages }) => {
  const [inputValue, setInputValue] = useState('')

  const onChangeValue = (e) => {
    setInputValue(e.target.value)
  }

  const addMessage = () => {
    console.log(inputValue)

    axios
      .post(baseURL, {
        message: 'This is a first Message.',
        author: 'test',
      })
      .then(() => {
        fetchMessages()
      })
  }

  return (
    <div className='fixed-bottom bg-info'>
      <div className='container'>
        <div className='input-group m-2'>
          <input
            type='text'
            value={inputValue}
            onChange={onChangeValue}
            className='form-control'
            placeholder='Message'
            aria-label='Chat Message'
            aria-describedby='basic-addon2'
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-secondary'
              type='button'
              onClick={addMessage}
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddMessage
