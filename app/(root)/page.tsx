import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  const loggedIn = {firstName:'Aman',lastName:'Raj Pal',
    email:'rajpalaman09@gmail.com'};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
          type = "greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Access and manage your account and
          transaction efficiently."
          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35} />
        </header>
        RECENT TRANSTIONS

      </div>
      <RightSidebar
      user={loggedIn}
      transtions={[]}
      banks={[{currentBalance:1250},{currentBalance:1250}]}
      
      />
    </section>
  )
}

export default Home