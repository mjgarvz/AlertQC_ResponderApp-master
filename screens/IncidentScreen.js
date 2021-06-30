import { isLoading } from "expo-font";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Text,
  Linking,
  Image,
  TouchableOpacity,
  Clipboard,
  ToastAndroid,
  AlertIos,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import CallButton from "./../components/ButtonBasic";
import { Ionicons } from "@expo/vector-icons";

export default class IncidentScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    };
  }
  

  componentDidMount() {
    fetch("https://alert-qc.com/mobile/reportsOnProc.php")
      .then((response) => response.json())
      .then((reseponseJson) => {
        this.setState({
          isLoading: false.valueOf,
          dataSource: reseponseJson,
        });
      });
      AsyncStorage.getItem("userEmail").then((data) => {
        if (data) {
            Email: JSON.parse(data)
        }
      });
  }
  //INIDENT CARD

  _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            "Incident Detail",
            "Reporter: " +
              item.first_name +" "+ item.last_name +
              "\n" +
              "Location: " +
              item.location_of_incident +
              "\n" +
              "Incident: " +
              item.incident_type +
              "\n" +
              "Injuries: " +
              item.injuries +
              "\n" +
              "Date/Time Reported: " +
              item.date_time +
              "\n" +
              "Short Brief:\n\n" +
              item.short_description,
            [
              {
                text: "Cancel",
                style: "cancel",
              },
              {
                text: "Call",
                onPress: () =>{Linking.openURL("tel: " + item.phone);}
              },
              {
                text: "Copy Address",
                onPress: () => {
                  Clipboard.setString(item.location_of_incident);
                  if (Platform.OS === "android") {
                    ToastAndroid.show(
                      "Location Copied to Clipboard",
                      ToastAndroid.SHORT
                    );
                  } else {
                    AlertIOS.alert("Location Copied to Clipboard");

                  }
                },
              },
            ]
          );
        }}
      >
        <View style={styles.itemCard}>
          <Text style={styles.itemText}>
            {"Reporter: " +
              item.first_name +" "+ item.last_name +
              "\n" +
              "Location: " +
              item.location_of_incident +
              "\n" +
              "Incident: " +
              item.incident_type +
              "\n"+
              "Contact Number: " +
              item.phone}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    let { dataSource, isLoading } = this.state;
    if (isLoading) {
      <View></View>;
    }
    
    return (
      <SafeAreaView>
        <View styles={styles.container}>
          <FlatList
            data={dataSource}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
          ></FlatList>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingTop: 50,
  },
  itemCard: {
    padding: 25,
    borderBottomWidth: 2,
    borderBottomColor: "#ffcd9c",
  },
  itemText: {
    fontSize: 20,
    color: "black",
  },
  LogButt: {
    position: "absolute",
  },
});
