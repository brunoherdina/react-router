import './Content.css'
import React from 'react'
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import { Switch, Route } from 'react-router-dom'

const Content = props => (
    <main className="Content">
       <Switch>
           <Route path="/about">
               <About></About>
           </Route>
           <Route path="/home">
               <Home></Home>
           </Route>
       </Switch>
    </main>
)

export default Content;