import React from 'react'
import "./css/Post.css"

// Icons
import Avatar from '@mui/material/Avatar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';


function Post() {

    const timestamp = new Date(); 
    
  return (
            <div className="post">
            <div className="postTop">
                <Avatar src="https://th.bing.com/th/id/OIP.TKaUFxDz8t2louvtN75DTgHaE7?rs=1&pid=ImgDetMain" className="postAvatar" />

                <div className="postTopInfo">
                    <h3>benjamin"</h3>
                    {/* <p>time</p> */}
                    {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
                    <p>{new Date(timestamp).toUTCString()}</p>
                </div>
            </div>

            <div className="postBottom">
                <p>message</p>
            </div>

            <div className="postImage">
                <img src="https://th.bing.com/th/id/OIP.TKaUFxDz8t2louvtN75DTgHaE7?rs=1&pid=ImgDetMain" alt=""/>
            </div>

            <div className="postOptions">
                <div className="postOption">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>

                <div className="postOption">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>

                <div className="postOption">
                    <NearMeIcon />
                    <p>Share</p>
                </div>

                <div className="postOption">
                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon />
                </div>
            </div>
        </div>
  )
}

export default Post;