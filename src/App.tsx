import './App.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import MainComponent from './components/MainComponent'
import Login from './containers/Login/Login'



  const App: React.FC = () => {
    return (
      <Route path="/" element={<Login />} />
    )
  }




export default App