import { Menu } from './components'
import {LoadingPage, HomePage } from './page'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { MouseMoveDown } from './components'

function App() {
  const location = useLocation()

  return (
    <div>
      <header>
          {/* <Menu /> */}
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route exact path='/' component={LoadingPage} />
                <Route path='/home' component={HomePage} />
            </Switch>
          </AnimatePresence>
      </header>
    </div>
  );
}

export default App;
