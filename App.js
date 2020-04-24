import React, { Component } from 'react';
import {View,Text,Button} from 'react-native';
import Modal from 'react-native-modal';
import Header from './component/header'
import Router from './routes/Router'
import {NativeRouter, Route} from 'react-router-native'
export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      visible:false,
    }
  }

  onClick=()=>{
    const {visible}=this.state;
    this.setState({visible:!visible});
  }

  render() {
    return (
      <View>
          <View style={{marginBottom:10, paddingRight:350}}>
          <Button
          onPress={this.onClick}
          title="☰"
          />
          </View>
          <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#D1D1D1',width:400,height:750}}>
            <NativeRouter>
              <Modal
                transparent={true}
                isVisible={this.state.visible}
                animationInTiming={200}
                animationOutTiming={100}
                onBackdropPress={() => { this.onClick(true) }}
                onRequestClose={() => { this.onClick(true)}}
                style={{ paddingBottom:550,marginTop: 0,marginBottom:0, marginLeft: 0, backgroundColor: '#DFDFDF', height: 600,width:200 }}

              >
                <Header onClick={this.onClick}/>
              </Modal>
              <Router/> 
            </NativeRouter>
          </View>
      </View>
    )
  }
}
