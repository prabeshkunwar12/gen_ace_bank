import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const Home = () => {
  const loggedInUser = { firstName: 'Prabesh' };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedInUser?.firstName || 'Guest'} 
            subtext="Access and manage your account and transactions efficiently."
          />
        </header>
      </div>
    </section>
  )
}

export default Home