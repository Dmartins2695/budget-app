import { Amplify } from 'aws-amplify'

import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import awsExports from './aws-exports'
import { Home } from './pages/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

Amplify.configure(awsExports)

function App({ signOut, user }) {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home signOut={signOut} user={user} />} />
        <Route path='/settings' element={<Home signOut={signOut} user={user} />} />
        <Route path='/' element={<Home signOut={signOut} user={user} />} />
        <Route path='/*' element={<Home signOut={signOut} user={user} />} />
      </Routes>
    </Router>
  )
}

export default withAuthenticator(App)
