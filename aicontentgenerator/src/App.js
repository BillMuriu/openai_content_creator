import logo from './logo.svg';
import Navigation from './components/Navigation'
import Home from './components/Home'
import ProductDescription from './components/ProductDescription'
import Tweets from './components/Tweets'
import ColdEmails from './components/ColdEmails'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Tweets/>
      <Home/>
      <ColdEmails/>
      <ProductDescription/>
    </div>
  );
}

export default App;
