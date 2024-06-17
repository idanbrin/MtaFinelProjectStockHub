import React, { useState } from 'react';
import './css/AddPost.css'

// icons
import Avatar from '@mui/material/Avatar';
import Videocam from '@mui/icons-material/Videocam';
import PhotoLibrary from '@mui/icons-material/PhotoLibrary'
import InsertEmoticon from '@mui/icons-material/InsertEmoticon'



function AddPost () {


    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = e => {

        e.preventDefault();

        // send data to database
        /*db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })*/

        // clear form
        setInput('');
        setImageUrl('');
    }
    return (
        <div className="AddPostContainer">
            <div className="AddPostContainerTop">
                <Avatar  />
                <form>
                    <input 
                        value={input} 
                        onChange={e => setInput(e.target.value)} 
                        className="AddPostInput" 
                        placeholder={`What's on your mind,?`} 
                    />
                    <input
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)} 
                        placeholder={"Image URL (Optional)"} />
                    <button onClick={handleSubmit} type="submit">Hidden submit</button>
                </form>
            </div>

            <div className="messageSenderBottom">
                <div className="messageSenderOption">
                    <Videocam style={{color: 'red'}} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSenderOption">
                    <PhotoLibrary style={{color: 'green'}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSenderOption">
                    <InsertEmoticon style={{color: 'orange'}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default AddPost;