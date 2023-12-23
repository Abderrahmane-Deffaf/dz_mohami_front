import {createRoot} from 'react-dom/client'
import './index.css'

const App = () => {
  return (
    <div className=' text-6xl text-purple-500'>App</div>
  )
}

const container = document.getElementById("root") ;

const root = createRoot(container) ; 
root.render(<App/>) ; 