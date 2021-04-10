import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './pages/About'
import Home from './pages/Home'
import {Alert} from './components/Alert'
import {AlersState} from './context/alert/AlersState'
import {FirebaseState} from './context/firebase/FirebaseState'




export function App() {
  return (

    <FirebaseState>
      <AlersState>
        <BrowserRouter>
          <NavBar/>
          <div className="container pt-4">
            <Alert/>
            <Switch>
              <Route path={'/'} exact component={Home}/>
              <Route path={'/About'} component={About}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AlersState>
    </FirebaseState>
  )
}

