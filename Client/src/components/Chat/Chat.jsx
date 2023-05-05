import {useState, useEffect, useRef} from 'react'
import './Chat.css'
import React from 'react';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '../../img/bot.png'


const Chat = () => {

    const [ws, setWs] = useState()
    const [writeMessage, setWriteMessage] = useState()
    const [allMessages, setAllMessages] = useState([])
    const bodyRef = useRef(null)
  
    useEffect(() => {
      const webSocket = new WebSocket('ws://192.168.31.210:8000')
      webSocket.onmessage = (message) => {
        bodyRef.current.scrollTo(0, bodyRef.current.scrollHeight)
        setAllMessages(prev => [...prev, message.data])
  
      }
      setWs(webSocket)
    }, [])
  
    const sendMessage = () => {
      ws.send('Sam: ' + writeMessage)
      setWriteMessage('')
    }

    //socketemmit

  return (
    
    <div className='messenger__back'>
        <div className='messenger__header'>
            {/* <button><ArrowBackIcon /></button> */}
            <img className='messenger__ava' src= {Avatar} alt='avatar' />
            <h3>Elizabeth Nelson</h3>
        </div>
        <div className='messenger__body' ref={bodyRef}>
            {allMessages.length ? allMessages.map(text => 
                <div className='messenger__msg'>
                  <p className='msg__text'>{text}</p>
                </div>)
               : null
            }
        </div>
        <div className='messenger__footer'>
            <input value={writeMessage} className='messenger__input' onChange={e => setWriteMessage(e.target.value)} />
            <button onClick={sendMessage}><SendIcon/></button>
        </div>
    </div>
  )
}

export default Chat