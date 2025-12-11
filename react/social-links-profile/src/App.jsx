import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileHeader from './components/ProfileHeader';
import SocialLink from './components/SocialLink';
import SocialMenu from './components/SocialMenu';

function App() {

  return (
    <>
      <ProfileHeader />
      <SocialMenu/>
    </>
  )
}

export default App
