import React, { Component } from 'react'
import {View} from 'react-native'
import {Route} from 'react-router-native'
import Home from '../component/Home'
import About from '../component/About'
import Notification from '../component/Notification'
export default class Router extends Component {
    render() {
        return (
              <View>
                  <Route exact path='/' component={Home}/>
                  <Route path='/about'  component={About}/>
                  <Route path='/notification' component={Notification}/>
              </View>           
        )
    }
}
