import React ,{useEffect, useState} from 'react'
import "./Chat.css"
import Message from './Message'
import ChatHeader from './ChatHeader'
import { AddCircle, CardGiftcard, EmojiEmotions,Gif } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { selectChannelId, selectChannelName } from './features/appSlice'
import db from './Firebase'
import firebase from 'firebase/compat/app';
function Chat() {
  const user=useSelector(selectUser)
  const channelId=useSelector(selectChannelId);
  const channelName=useSelector(selectChannelName);
  const [input,setInput]=useState([""])
  const [messages,setMessages]=useState([]);

  useEffect(()=>{
    if(channelId){
      db.collection("channels").doc(channelId)
      .collection("messages").orderBy("timestamp","desc")
      .onSnapshot((snapshot)=>{
        setMessages(snapshot.docs.map((doc)=>doc.data()))
      })
    }
  },[channelId])
  const sendMessage=e=>{
    e.preventDefault();
    db.collection("channels").doc(channelId).collection("messages")
    .add({
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      message:input,
      user:user,
    })
    setInput("")
  }
  return (
    <div className='chat'>
    <ChatHeader channelName={channelName}/>
    <div className="chat__messages">
        {messages.map((message) =>(
          <Message
          timestamp={message.timestamp}
          message={message.message}
          user={message.user}
          />
        ))}

    </div>
    <div className="chat__input">
        <AddCircle fontSize='large'/>
        <form>
            <input 
            value={input}
            disabled={!channelId}
            onChange={(e)=>setInput(e.target.value)}
            placeholder={`Message #${channelName}`}/>
            <button 
            disabled={!channelId}
            onClick={sendMessage}
            className='chat__inputButton' type='submit'>Send Message</button>
        </form>
        <div className="chat__inputIcons">
            <CardGiftcard fontSize='large'/>
            <Gif fontSize="large"/>
            <EmojiEmotions fontSize='large'/>
        </div>
    </div>
    </div>
    
  )
}

export default Chat