import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button}  from 'react-native';
//import ButtonPanel from "./ButtonPanel";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.textstyling}  >My name is Moiz Nasir</Text>
//       <Text style={styles.subtextstyle}> SP18-BCS-089</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }


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




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      gstate: "",
      output: "",
      switch:""
    };
    this.handleOperand = this.handleOperand.bind(this);



  }


  
handleOperand(op) {
  this.setState({ input: op });
}

Guess() {
  const r = Math.floor(Math.random() * 10);
//   //console.log(r);
   const v = parseInt(this.state.input, 10);
   if (r === v) {
     this.setState({ input: v, setg: r, output: "Congrats, number matched!" });
   } else {
     this.setState({ output:"Sorry, wrong guess!"});
   }
   }

  StartScreen= ()=> {
  
    return (
      <View>
      <Text style={{ textAlign: 'center', fontSize: 20 }}>
        Welcome to Guess a Number Game
      </Text>
      <Button title="Start Game" onPress={this.setState({switch:"1"})} />
    </View>
      );  
}


gameView(){
<View> 
      

      <View style={{fontSize:20}}>
      <Text>{this.state.input}</Text>
      <Text>{this.state.output}</Text>
      </View>
  
  
          <View style={styles.ButtonPanel}>
          <ButtonPanel handler={() => this.handleOperand("AC")} number="AC"/>
          <ButtonPanel handler={() => this.handleOperand("(x)")} number="(x)"/>
          <ButtonPanel handler={() => this.handleOperand("/")} number="/"/>
          <ButtonPanel handler={() => this.handleOperand("%")} number="%"/>
          </View>
  
          <View style={styles.ButtonPanel}>
          <ButtonPanel handler={() => this.handleOperand("7")} number="7"/>
          <ButtonPanel handler={() => this.handleOperand("8")} number="8"/>
          <ButtonPanel handler={() => this.handleOperand("9")} number="9"/>
          <ButtonPanel handler={() => this.handleOperand("*")} number="*"/>
          </View>
  
        
          <View style={styles.ButtonPanel}>
          <ButtonPanel handler={() => this.handleOperand("4")} number="4"/>
          <ButtonPanel handler={() => this.handleOperand("5")} number="5"/>
          <ButtonPanel handler={() => this.handleOperand("6")} number="6"/>
          <ButtonPanel handler={() => this.handleOperand("-")} number="-"/>
          </View>
  
          <View style={styles.ButtonPanel}>
          <ButtonPanel handler={() => this.handleOperand("1")} number="1" />
          <ButtonPanel handler={() => this.handleOperand("2")} number="2" />
          <ButtonPanel handler={() => this.handleOperand("3")} number="3" />
          <ButtonPanel handler={() => this.handleOperator("+")} number="+" />
        </View>
  
        <View style={styles.ButtonPanel}>
          <ButtonPanel handler={() => this.handleOperand("0")} number="0"/>
          <ButtonPanel handler={() => this.handleOperand(".")} number="."/>
          <ButtonPanel handler={() => this.handleOperator("=")} number="="/>
          <ButtonPanel handler={() => this.Guess()} number="Guess"/>
          </View>
        <Button title="SUBMIT" onPress={()=>this.EndScreen}/>
  
        </View>
  
}


    EndScreen(){
      
<Text>Finish</Text>
        

    }

  render() {
    return (
      Switching=()=>{
      <View style={styles.container}>
 <View>{this.StartScreen()}</View> 
{/* 
if ({this.state.switch=="1"})
  return
  {this.gameView}
  
 else
 return
 <View >{this.StartScreen()}</View>  */}
  
    
</View>
      }
    )
    ;
  }
return
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textstyling: {
    color: 'black',
    fontSize: 32,
    textAlign:'center',
    padding:10
    
  },

  // subtextstyle:{
  //   color:'#8ab92d',
  //   fontSize: 25,
  //   padding:12,
  //   textAlign:'center'
  // }

  // buttonpanel: {
  //   display: "flex",
  //   backgroundColor:"#8ab92d",
  //   flexDirection:"row",
  // },

  
ButtonPanel:{
width:"45%",
// height: "12%",
padding:"5%",
display: "flex",
flexDirection:"row"

}


});


