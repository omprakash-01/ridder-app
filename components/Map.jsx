import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Map = () => {
  return (
    <>
      <View style={
        Styles.container}>
        <View style={Styles.mapContainer}>
          <Image source={require("../assets/images/fullmap.png")} />
        </View>
      </View>
    </>
  );
}

export default Map

const Styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
});
