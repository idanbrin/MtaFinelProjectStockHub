import React from 'react'
import LeftSideHomePage from './LeftSideHomePage'
import JournalTrader from './JournalTrader'
import RightSideHomePage from './RightSideHomePage'

function JournalTraderPage() {
  return (
    <div className='JournalTraderPageContainer'>

        <div className='HomePageContainer-LeftSideHomePageContainer'><LeftSideHomePage /></div>
        <div className='HomePageContainer-FeedSideHomePageContainer'><JournalTrader /></div>
        <div className='HomePageContainer-RightSideHomePageContainer'><RightSideHomePage /></div>
  

    </div>
  )
}

export default JournalTraderPage;