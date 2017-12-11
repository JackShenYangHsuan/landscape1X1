/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import FlipCard from 'react-native-flip-card'

const countDownNumber = 5

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      userState: 'unsend',
      imageLocation: 'Image location',
      imageTime: 'Image time',
      countDownNumber: countDownNumber,
      flip:false
    };
  }

  _startCountDown = () => {
    let timer = setInterval(() => {
      if(this.state.countDownNumber == 1){clearInterval(timer)}
      this.setState({
        countDownNumber: this.state.countDownNumber - 1
      });
    }, 1000);

  }

  _send = () => {
    console.log('user sent')
    this.setState({
      userState: 'sent',
      flip:true
    })
    this._startCountDown()
  }

  _cancel = () => {
    {/* return back to camera */}
  }

  _goToSettings = () => {
    {/* go to settings */}
  }

  render() {
    return (
      <View style={styles.container}>

        <View style = {styles.banner}>
          <TouchableOpacity onPress = {this._cancel}>
            <Image
            source={require('./cancel.png')}
            style = {styles.bannerBtn}
            />
          </TouchableOpacity>
          <Text style = {styles.title}>LANDSCAPE{"\n"}1X1</Text>

          <TouchableOpacity onPress = {this._goToSettings}>
            <Image
            source={require('./settings.png')}
            style = {styles.bannerBtn}
            />
          </TouchableOpacity>

        </View>


        <View style = {styles.content}>
          <Text style = {styles.imageDate}>{this.state.imageTime}</Text>
          <FlipCard
            friction={10}
            flipHorizontal={true}
            flipVertical={false}
            clickable={false}
            flip={this.state.flip}
            style = {styles.imageHolder}>
            {/* Face Side */}
            <View >
            <Text>The Face</Text>
            </View>
            {/* Back Side */}
            <View >
            <Text>The Back</Text>
            </View>
          </FlipCard>
          <View style = {styles.locationHolder}>
            <Image
            source = {require('./pin.png')}
            style = {styles.pin}
            />
            <Text style = {{fontSize:15}}>{this.state.imageLocation}</Text>
          </View>
        </View>


        <View style = {styles.footer}>
        { this.state.userState == 'unsend'?
          <TouchableOpacity onPress = {this._send}>
          <Image
          source = {require('./sendBtn.png')}
          style = {styles.sendBtn}
          />
          </TouchableOpacity> :
          <View style = {styles.countDownBox}>
            <Text style = {{fontSize:20, color:'white'}}>
              {this.state.countDownNumber}
            </Text>
          </View>
        }
        </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    flexDirection: 'column',
    display: 'flex'
  },
  banner:{
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',
    width:'100%'
  },
  title:{
    fontSize:20,
    textAlign:'center',
    color:'#101EFF'
  },
  bannerBtn:{
    width:18,
    height:18
  },
  content:{
    flex:4,
    width:'100%',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  imageDate:{
    marginBottom:10,
    fontSize:15
  },
  imageHolder:{
    width:300,
    height:300,
    backgroundColor:'white',
  },
  locationHolder:{
    flexDirection:'row',
    height:50,
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  pin:{
    width:10,
    height:115/7,
    marginRight:10
  },
  footer:{
    flex:1,
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  sendBtn:{
    width:40,
    height:40
  },
  countDownBox:{
    width:40,
    height:40,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center'
  }


});
