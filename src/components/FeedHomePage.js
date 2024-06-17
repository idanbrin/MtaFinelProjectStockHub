import React from 'react'
import StorysContainer from './StorysContainer'
import "./css/FeedHomePageContainer.css"
import Post from './Post'
import AddPost from './AddPost'

function FeedHomePage() {
  return (
    <div className='FeedHomePageContainer'>

        <StorysContainer />
        <AddPost />
        <Post />

    </div>
  )
}

export default FeedHomePage