import { useState, useEffect, useRef } from "react";
import {auth, db} from "../firebase";
import {query, collection, orderBy, onSnapshot} from 'firebase/firestore';
import Message from "./Message";
import SendMessage from "./SendMessage";
import {useAuthState} from "react-firebase-hooks/auth"



const Chat = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();
    const [user] = useAuthState(auth);

    useEffect(() => {
        const q = query(collection(db, 'messages' ), orderBy('timestamp'));
        const unsuscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach(doc => {
                messages.push({content: doc.data(), id: doc.id})
            })
            setMessages(messages);
        })
        return () => unsuscribe(); 
    }, [])


    return (
        <>
            <section className="chat-content">
                {messages &&
                messages.map(item => (
                    <Message key={item.id} message={item} />
                ))}
                {user && <SendMessage scroll={scroll}/>}

            <span ref={scroll}></span>
            </section>
        </>
    );
}
 
export default Chat;