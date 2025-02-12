import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase";
import Picker from "emoji-picker-react";

const SendMessage = ({scroll}) => {
    const [input, setInput] = useState('');
    const [open, setOpen] = useState('close');

    const sendMessage = async (e) => {
        e.preventDefault();
        if (input === '') {
            alert('Please enter a valid message')
            return;
        }
        const {uid, displayNmae, photoURL} = auth.currentUser;
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayNmae,
            uid,
            photo: photoURL,
            timestamp: serverTimestamp()
        })
        setInput("");
        scroll.current.sccrollIntoView({behavior:'smooth'})
    }

    const emoji = () => {
        setOpen('open');
    }

    const closeEmoji = () => {
        setOpen('close');
    }

    const onEmojiClick = (event, emojiObjet) => {
        //console.log(emojiObjet);
        setInput(`${input}${emojiObjet.emoji}`);
    };

    return (
      <form onSubmit={sendMessage}>
            <button
                type="button"
                className="btn-emoji"
                onClick={emoji}>
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
            placeholder="Enter your messsage here"
            value={input}
            onChange={e => setInput(e.target.value)}
            />
            <button type="submit">Send <i className="fa-solid fa-paper-plane"></i></button>
      </form>
    );
}
 
export default SendMessage;