import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import ChatMasseges from './Components/ChatMessage'
import AddMessage from './Components/AddMessage'

const App = () => {
  const [messages, setMessages] = useState([])
  const baseURL =
    'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=HBAwxg0XMMM0'

  const fetchMessages = () => {
    axios
      .get(baseURL)
      .then((resp) => {
        console.log(resp.data)
        setMessages(resp.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  return (
    <Container>
      <div>
        <div>
          <ChatMasseges messages={messages} />
          <AddMessage fetchMessages={fetchMessages} />
        </div>
      </div>
    </Container>
  )
}

export default App
