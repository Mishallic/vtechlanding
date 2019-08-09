import React from 'react'
import { Switch, Route } from 'react-router-dom';
//components
import Home from './Components/Home/home';
import Layout from './Components/hoc/layout';

//this component collects routes to a switch, and applies the layout component.

const Routes = () => {
  return(
    <Layout>
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Layout>
  )
}

export default Routes