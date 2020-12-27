import { View, Text, StyleSheet } from 'react-native';
import * as React from 'react';

export function Home() {
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