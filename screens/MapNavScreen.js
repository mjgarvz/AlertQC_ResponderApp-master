import * as React from "react";
import { StyleSheet, View } from "react-native";
import MapboxNavigation from "@homee/react-native-mapbox-navigation";

const MapNavScreen = () => {
  return (
    <View style={styles.container}>
      <MapboxNavigation
        origin={[121.0519, 14.6470]}
        destination={[121.0437, 14.6760]}
        onLocationChange={(event) => {
          const { latitude, longitude } = event.nativeEvent;
        }}
        onRouteProgressChange={(event) => {
          const {
            distanceTraveled,
            durationRemaining,
            fractionTraveled,
            distanceRemaining,
          } = event.nativeEvent;
        }}
        onError={(event) => {
          const { message } = event.nativeEvent;
        }}
        onCancelNavigation={() => {
          // User tapped the "X" cancel button in the nav UI
          // or canceled via the OS system tray on android.
          // Do whatever you need to here.
        }}
        onArrive={() => {
          // Called when you arrive at the destination.
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MapNavScreen;
