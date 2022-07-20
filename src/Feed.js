import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import InputOption from './InputOption'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import Post from './Post'
import { db } from './Firebase'
import firebase from 'firebase/compat/app';

function Feed() {
    const [ posts, setPosts] = useState([]);
    const [ input, setInput ] = useState(""); 

    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) => {
            setPosts(
                snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        data: doc.data()
                    }
                    
                })
            )
        })
    }, []);

    const sendPost = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name: 'Dereje Seifu',
            description: "This is a test",
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput("");
    }

    return (
        <div className='feed'>
            <div className='feed_inputContainer'>
                <div className='feed_input'>
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type='text'/>
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className='feed_inputOption'>
                    <InputOption Icon={ImageIcon} title='Photo' color='#7085F9'/>
                    <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
                    <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
                    <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E'/>
                </div>
            </div>
            {posts.map(({id, data: {name, description, message, photoUrl}}) => {
                return (
                    <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
                )
                
                
            })};
        </div>
    )
}

export default Feed
