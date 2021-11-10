import React, { useState } from 'react'
import axios from 'axios'
import { baseURL } from '../App'

const AddMessage = ({ fetchMessages }) => {
  const [inputValue, setInputValue] = useState('')

  const onChangeValue = (e) => {
    setInputValue(e.target.value)
  }

  const addMessage = () => {
    axios
      .post(baseURL, {
        message: 'This is a second Message.',
        author: 'Top',
      })
      .then(() => {
        fetchMessages()
      })
      .catch((err) => {
        console.error('Error catching for adding Message', err)
      })
  }

  return (
    <>
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
    </>
  )
}

export default AddMessage
