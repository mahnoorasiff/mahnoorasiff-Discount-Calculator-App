import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Button title={this.props.number} onPress={this.props.handler}/>
        </View>
    );
  }
}

export default ButtonPanel;