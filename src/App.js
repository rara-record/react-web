import './css/style.css'
import { Route, Switch } from 'react-router-dom'

// import common component
import Header from './components/common/Header'
import Footer from './components/common/Footer'

// import main component
import Main from './components/main/Main'

// import sub component
import AboutUs from './components/sub/AboutUs'
import Youtube from './components/sub/Youtube'
import Gallery from './components/sub/Gallery'
import Community from './components/sub/Community'
import Contact from './components/sub/Contact'
import Join from './components/sub/Join'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/">
          <Header type={'sub'} />
        </Route>
      </Switch>

      <Route exact path="/about" component={AboutUs}></Route>
      <Route exact path="/youtube" component={Youtube}></Route>
      <Route exact path="/community" component={Community}></Route>
      <Route exact path="/gallery" component={Gallery}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/Join" component={Join}></Route>

      <Footer />
    </div>
  )
}

export default App
