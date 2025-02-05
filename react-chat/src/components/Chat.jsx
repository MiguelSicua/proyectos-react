import { useState } from "react";
import {db} from "../firebase";
import {query, collection, orderBy, onSnapshot} from 'firebase/firestore';
import { useEffect } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";



const Chat = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const newQuery = query(collection(db, 'messages' ), orderBy('timestamp'));

        const unsuscribe = onSnapshot(newQuery, (querySnapshot) => {
            let currentMessages = [];
            querySnapshot.forEach(item => {
                currentMessages.push({content: item.data(), id: item.id})
            })
            setMessages(currentMessages);
        })
        return unsuscribe; 
    })


    return ( 
        <section className="chat-content">
            {
                messages && messages.map(item => (
                    <Message
                        key={item.id}
                        message={item.content}
                    />
                ))
            }
            <SendMessage/>
        </section>
    );
}
 
export default Chat;