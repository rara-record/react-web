import { Route } from 'react-router-dom'
import './css/style.css'
import Header from './components/common/Header.js'
import Footer from './components/common/Footer.js'
import Main from './components/main/Main.js'
import Department from './components/sub/Department.js'
import Board from './components/sub/Board.js'
import Gallery from './components/sub/Gallery.js'
import Location from './components/sub/Location.js'
import Membership from './components/sub/Membership.js'
import Youtube from './components/sub/Youtube.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Main}></Route>
      <Route exact path="/department" component={Department}></Route>
      <Route exact path="/board" component={Board}></Route>
      <Route exact path="/gallery" component={Gallery}></Route>
      <Route exact path="/youtube" component={Youtube}></Route>
      <Route exact path="/location" component={Location}></Route>
      <Route exact path="/membership" component={Membership}></Route>
      <Footer />
    </div>
  )
}

export default App
