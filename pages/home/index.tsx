import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export const Home = () => {
  return (
    <View style={styles.container} >
      <Text>homepage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    marginTop: 30,
  },
});