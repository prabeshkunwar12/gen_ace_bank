import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import React from 'react'

const Home = () => {
  const loggedInUser = { firstName: 'Prabesh', lastName: 'Kunwar', email: 'prabeshkunwar12@gmail.com' };

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

        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedInUser}
        transactions={[]}
        banks={[{currentBalance: 123.50}, {currentBalance: 456.75}]} 
      />
    </section>
  )
}

export default Home