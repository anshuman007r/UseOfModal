import React, { Component } from 'react'
import {Link} from 'react-router-native'
import {View,Text} from 'react-native'
export default class header extends Component {
    render() {
        return (
            <View>
                <Link onPress={this.props.onClick} to ='/'>
                    <Text>Home</Text>
                </Link>
                <Link onPress={this.props.onClick} to ='/About'>
                    <Text>About</Text>
                </Link>
                <Link onPress={this.props.onClick} to ='/Notification'>
                    <Text>Notification</Text>
                </Link>    
            </View>
        )
    }
}
