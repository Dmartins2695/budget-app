import { Amplify } from 'aws-amplify'

import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import awsExports from './aws-exports'
import { Home } from './pages/home/Home'
import { Category } from './pages/category/Category'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import * as React from 'react'

Amplify.configure(awsExports)

function App({ signOut, user }) {
  return (
    <Router>
      <Navbar signOut={signOut} user={user} />
      <Routes>
        <Route path='/home' element={<Home signOut={signOut} user={user} />} />
        <Route path='/settings' element={<div>Settings</div>} />
        <Route path='/category' element={<Category />} />
        <Route path='/tester' element={<div />} />
        <Route exact path='/' element={<Navigate to='/home' />} />
        <Route path='/*' element={<Navigate to='/home' />} />
      </Routes>
    </Router>
  )
}

export default withAuthenticator(App)
