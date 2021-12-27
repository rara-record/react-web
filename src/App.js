import { Route } from 'react-router-dom'
import './css/style.css'
import Header from './components/common/Header.js'
import Footer from './components/common/Footer.js'
import Main from './components/main/Main.js'
import About from './components/sub/About.js'
import Youtube from './components/sub/Youtube.js'
import Gallery from './components/sub/Gallery.js'
import Contact from './components/sub/Contact.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Main}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/youtube" component={Youtube}></Route>
      <Route exact path="/gallery" component={Gallery}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Footer />
    </div>
  )
}

export default App
