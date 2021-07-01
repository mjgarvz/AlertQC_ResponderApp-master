import React, { Component, useState } from "react";
import { Alert } from "react-native";
import { KeyboardAvoidingView, View, Text, StyleSheet, TextInput, Dimensions, Button, ScrollView, SafeAreaView, FlatList,TouchableOpacity } from "react-native";


export default class CreateChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      userMessage: "",
      
    };
  }
  

  componentDidMount() {
    fetch("https://alert-qc.com/mobile/chatTemp.php")
      .then((response) => response.json())
      .then((reseponseJson) => {
        this.setState({
          isLoading: false.valueOf,
          dataSource: reseponseJson,
        });
      });

  }
  SendMsg = () => {
    const { userMessage } = this.state;
    console.log(userMessage);

    fetch("https://alert-qc.com/mobile/chatSend.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userMessage,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // If the Data matched.
        if (responseJson === "Loading~") {
          Alert.alert(responseJson);
        } else {
          Alert.alert(responseJson);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  //INIDENT CARD

  _renderItem = ({ item, index }) => {
    return (
        <View style={styles.itemCard}>
          <Text style={styles.itemText}>
            {
              item.message +
              "\n" }
          </Text>
        </View>
    );
  };

  render() {
    let { dataSource, isLoading } = this.state;
    if (isLoading) {
      <View></View>;
    }
    return (
      <SafeAreaView>

        <View>
          <View style={styles.chatScreen}>
          <FlatList keyboardShouldPersistTaps='always'
            data={dataSource}  
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
            inverted={true}
            extraData={this.state}
          ></FlatList>
          </View>
        </View>
        <ScrollView keyboardShouldPersistTaps='always'>
        <View>
           <Text >Message:</Text>
           <TextInput
             placeholder="Hi! How are you doing?"
             autoFocus={true}
            keyboardType="default"
            onChangeText={(userMessage) => this.setState({ userMessage })}
             autoCapitalize="sentences"
             multiline={true}
             
           />
         </View>
         <Button title="Send Chat" onPress={() => {this.SendMsg()}}/>
       </ScrollView>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    height: Dimensions.get('window').height
  },
  container:{
    
  },
  form: {
    padding: 30,
  },
  formControl: {
      paddingVertical: 5
  },
  inputTitle: {
      fontFamily: 'open-sans-bold',
      fontSize: 15
  },
  input: {
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      paddingVertical: 5
  },
  chatScreen:{
    height: Dimensions.get("screen").height * 0.30,

    
  },
  itemCard:{
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ffcd9c',
  },
  itemText:{
    fontSize: 17,
    color: 'black',
  },
});

