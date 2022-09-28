import logo from './logo.svg';
import Navigation from './components/Navigation'
import Home from './components/Home'
import ProductDescription from './components/ProductDescription'
import Tweets from './components/Tweets'
import ColdEmails from './components/ColdEmails'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

functions App() {
  return (
    <Router>
      <div className="App">
      <Navigation/>
      
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/product-description" element={<ProductDescription/>}/>
        <Route path="/cold-emails" element={<ColdEmails/>}/>
        <Route path="/tweets" element={<Tweets/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
