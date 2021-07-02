import React from 'react';
import { OpenMapDirections } from 'react-native-navigation-directions';
import { View, Text, Button } from 'react-native';

export default class MapNavScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

 _callShowDirections = () => {
    const startPoint = {
    } 

    const endPoint = {
      longitude: 121.0493,
      latitude: 14.6516
    }

		const transportPlan = 'd';

    OpenMapDirections(startPoint, endPoint, transportPlan).then(res => {
      console.log(res)
    });
  }
  
  render() {
    return (
      <View >
        <Text>Show direction between two random points!</Text>
        <Button
        onPress={() => { this._callShowDirections() }}
        title="Open map"
        color="#841584"
      />
      </View>
    );
  }
}