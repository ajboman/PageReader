import Info from './components/Info';
import Summarize from './components/Summarize';

import './App.css';

const App = () => {
  return (
    <main>
        <div className='main'>
            <div className='gradient'/>
        </div>
        <div className='app'>
            <Info/>
            <Summarize/>
        </div>
    </main>
  )
}

export default App