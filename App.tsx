import React from 'react';
import { StyleSheet, Text, TextProps, View } from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});


export default App;