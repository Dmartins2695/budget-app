import { Amplify } from 'aws-amplify'

import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import awsExports from './aws-exports'
import { Home } from './pages/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { NumberDisplayer } from './components/NumberDisplayer'

Amplify.configure(awsExports)

function App({ signOut, user }) {
  return (
    <Router>
      <Navbar signOut={signOut} user={user} />
      <Routes>
        <Route path='/home' element={<Home signOut={signOut} user={user} />} />
        <Route path='/settings' element={<div>Settings</div>} />
        <Route path='/tester' element={<NumberDisplayer />} />
        <Route exact path='/' element={<Navigate to='/home' />} />
        <Route path='/*' element={<Navigate to='/home' />} />
      </Routes>
    </Router>
  )
}

export default withAuthenticator(App)
