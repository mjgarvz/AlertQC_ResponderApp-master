import React, { Component } from "react";
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
      <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}>
      <SafeAreaView>
        
        <View style={styles.container}>
          <View style={styles.chatScreen}>
          <FlatList
            data={dataSource}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
            inverted={true}
          ></FlatList>
          </View>
        </View>
        <View style={styles.form}>
        <View style={styles.formControl}>
           <Text style={styles.inputTitle}>Message:</Text>
           <TextInput
             placeholder="Hi! How are you doing?"
             style={styles.input}
            keyboardType="default"
            onChangeText={(userMessage) => this.setState({ userMessage })}
             autoCapitalize="sentences"
             multiline={true}
           />
         </View>
         <Button title="Send Chat" onPress={() => {this.SendMsg()}}/>
       </View>

      </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    height: Dimensions.get('window').height
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
    height: Dimensions.get("screen").height * 0.50,
    padding: 30,
    paddingBottom: -20,
    
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

