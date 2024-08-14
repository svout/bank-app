import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {

  const loggedIn = {firstName: 'Ivan', lastName: 'Kovalchuk', email: 'ivankovalchuk.service@gmail.com'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox  
          type='greeting'
          title='Welcome'
          user={loggedIn?.firstName || 'Guest'}
          subtext='Acces and manage your account and transactions efficiently.'
          />
          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
          />
        </header>

       recent transaction
      </div>

      <RightSidebar user={loggedIn} transactions={[]} banks={[{ currentBalance: 123}, { currentBalance: 1250}]}/>
    </section>
  )
}

export default Home