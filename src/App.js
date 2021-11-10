import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import ChatMasseges from './Components/ChatMessage'
import AddMessage from './Components/AddMessage'

export const baseURL =
  'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=HBAwxg0XMMM0'

const App = () => {
  const [messages, setMessages] = useState([])

  const fetchMessages = () => {
    axios
      .get(baseURL)
      .then((resp) => {
        setMessages(resp.data)
      })
      .catch((err) => {
        console.error('Error catching Messages', err)
      })
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  return (
    <div>
      <div>
        <ChatMasseges messages={messages} />
        <AddMessage fetchMessages={fetchMessages} />
      </div>
    </div>
  )
}

export default App
