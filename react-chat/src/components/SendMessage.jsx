import { useState } from "react";
import { addDoc, collection, serverTimestamp, Timestamp } from "firebase/firestore";
import { db, auth } from "../firebase";
import Picker from "emoji-picker-react";

const SendMessage = () => {
    const [input, setInput] = useState('');
    const [open, setOpen] = useState('close');

    const sendMessage = async e => {
        e.preventDefault();
        const {uid, displayNmae, photoURL} = auth.currentUser;
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayNmae,
            uid,
            photo: photoURL,
            timestamp: serverTimestamp()
        })
        setInput("");
    }

    const emoji = () => setOpen('open')
    const closeEmoji = () => setOpen('close');
    const onEmojiClick = (e, emojiObjet) => {
        setChosenEmoji(emojiObjet);
    };

    return (
      <form onSubmit={sendMessage}>
            <button
                type="button"
                className="btn-emoji"
                onClick={emoji}
            >
                <i className="fa-solid fa-face-grin-wink"></i>
            </button>
            <div className={open}>
                <button
                    type="button"
                    className="close-emoji"
                    onClick={closeEmoji}
                
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <Picker onEmojiClick={onEmojiClick}/>
            </div>
            <input
            type="text"
            placeholder="Enter yout messsage here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">send</button>
      </form>
    );
}
 
export default SendMessage;