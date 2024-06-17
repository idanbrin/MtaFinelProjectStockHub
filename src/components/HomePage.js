import React from 'react'
import LeftSideHomePage from './LeftSideHomePage'
import FeedHomePage from './FeedHomePage'
import RightSideHomePage from './RightSideHomePage'
import './css/HomePage.css'

function HomePage() {
  return (
    <div className='HomePageContainer'>

        <div className='HomePageContainer-LeftSideHomePageContainer'><LeftSideHomePage /></div>
        <div className='HomePageContainer-FeedSideHomePageContainer'><FeedHomePage /></div>
        <div className='HomePageContainer-RightSideHomePageContainer'><RightSideHomePage /></div>
        
    </div>
  )
}

export default HomePage