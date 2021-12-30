import { Route } from 'react-router-dom'
import './css/style.css'

//import common component
import Header from './components/common/Header'
import Footer from './components/common/Footer'

//import main component
import Visual from './components/main/Visual'
import Intro from './components/main/Intro'
import Project from './components/main/Project'
import Banner from './components/main/Banner'

//import sub component
import AboutUs from './components/sub/AboutUs'
import Youtube from './components/sub/Youtube'
import Gallery from './components/sub/Gallery'
import Community from './components/sub/Community'
import Contact from './components/sub/Contact'

// public

function App() {
  return (
    <div className="App">
      <Header />

      <Route exact path="/">
        <main>
          <Visual />
          <Intro />
          <Banner />
          <Project />
        </main>
      </Route>

      <Route exact path="/about" component={AboutUs}></Route>
      <Route exact path="/youtube" component={Youtube}></Route>
      <Route exact path="/community" component={Community}></Route>
      <Route exact path="/gallery" component={Gallery}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Footer />
    </div>
  )
}

export default App
