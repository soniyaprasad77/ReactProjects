import react from 'react'
import UserContextProvider from './Context/UserContextProvider';
import './App.css'
import Login from "./Components/Login"
import Profile from "./Components/Profile"

function App() {

  return (
    <UserContextProvider>
      <h5>Here we are Learning React useContext Hook, and APIs in details : CHAI AUR CODE PR</h5>
      <Login />
      <Profile />
      

   </UserContextProvider>
  )
}

export default App
