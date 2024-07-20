import React, { useRef,useEffect, useState } from 'react'
import './Chat.css'
const WebSocketComponent = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const socketRef = useRef(null)

  useEffect(() => {
    // Initialize WebSocket connection
    socketRef.current = new WebSocket('ws://localhost:8000/ws/sayWhat/')

    socketRef.current.onopen = () => {
      console.log('WebSocket connection established')
    }

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data)
      setMessages((prevMessages) => [...prevMessages, data.message])
    }

    socketRef.current.onclose = () => {
      console.log('WebSocket connection closed')
    }

    return () => {
      // Close the WebSocket connection when the component is unmounted
      if (socketRef.current) {
        socketRef.current.close()
      }
    }
  }, [])

  const sendMessage = () => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ message }))
    } else {
      console.error('WebSocket connection is not open')
    }
  }

  const handleKeyDown = (event) =>
  {
    if (event.key === 'Enter' && message.length > 0)
    {
      sendMessage()
      setMessage("")
    }
  }
  return (
    <div className="container">
      <div className="input-container">
        <input
          id="text"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div align="center">
        <ul className="message-list">
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WebSocketComponent