import React, { Component } from "react";
import { StyleSheet, View, Dimensions, Icon, As } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import CallButton from "../components/ButtonBasic";
import { Foundation, Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

MapboxGL.setAccessToken(
  "pk.eyJ1IjoiY2Fwc3RvbmVmZXV0dXJlIiwiYSI6ImNrb3d1aTU0YjA4YnYyd213cmdrb3R5aHkifQ.PI0qIRy-li9l1QNq0ZjT3A"
);

export default class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      follow: true,
    };
    setInterval(() => {
      this.setState({ follow: false });
    }, 5000);
  }
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView zoomEnabled={true} style={styles.map}>
            <MapboxGL.UserLocation
              showsUserHeadingIndicator={true}
              renderMode="normal"
              androidRenderMode="normal"
            />
            <MapboxGL.Camera
              zoomLevel={12}
              centerCoordinate={[121.049467, 14.65107]}
              followUserLocation={this.state.follow}
              followUserMode="normal"
            />
          </MapboxGL.MapView>
          <View
            style={{
              backgroundColor: "transparent",
              position: "absolute",
              top: "80%",
              left: "80%",
              zIndex: 10,
            }}
          >
            <CallButton style={styles.centButt}>
              <Pressable
                onPress={() => {
                  this.setState({ follow: true });
                  console.log(this.state);
                }}
              >
                <Foundation name="target-two" size={40} color="black" />
              </Pressable>
            </CallButton>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  container: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "tomato",
  },
  map: {
    flex: 1,
  },
  centButt: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 25,
    height: 25,
  },
  centButt2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 25,
    height: 25,
  },
});
