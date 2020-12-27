import { View, Text, StyleSheet } from 'react-native';
import * as React from 'react';

export function Home() {
  return (
    <View style={styles.container} >
      <Text>homeTab/home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 30,
    padding: 10,
  },
});