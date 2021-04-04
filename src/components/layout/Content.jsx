import './Content.css'
import React from 'react'
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import { Switch, Route } from 'react-router-dom'

const Content = props => (
    <main className="Content">
       <Switch>
           <Route path="/about">
               <About></About>
           </Route>
           <Route path="/param/:id">
               <Param></Param>
           </Route>
           <Route exact path="/">
               <Home></Home> 
           </Route>
       </Switch>
    </main>
)

export default Content;