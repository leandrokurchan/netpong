import React from "react";
import { ScrollView, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import MainStack from "./navigation/MainStack";

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MainStack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});

export default App;
