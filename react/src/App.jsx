import { useState } from 'react'
import './App.css'
import avatar from "./assets/images/avatar-jessica.jpeg"
import ProfileHeader from './components/ProfileHeader';
import SocialMenu from './components/SocialMenu';

function App() {

  return (
    <div className="profile-container">
      <ProfileHeader avatar={avatar} name="Jessica Randall" location="London, United Kingdom" tagline="Front-end developer and avid reader" />
      <SocialMenu/>
    </div>
  )
}

export default App
