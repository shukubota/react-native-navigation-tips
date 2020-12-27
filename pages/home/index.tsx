import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as React from 'react';

interface Props {
  navigation: {
    push: (path: string ) => void;
  }
}

export function Home(props: Props) {
  return (
    <View style={styles.container} >
      <Text>homeTab/home</Text>
      <TouchableOpacity
        onPress={() => props.navigation.push('HomeTab/HomeDetail')}
      >
        <Text style={styles.toText} >to HomeTab/HomeDetail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.push('Login')}
      >
        <Text style={styles.toText} >to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 30,
    padding: 10,
  },
  toText: {
    textAlign: 'center',
    padding: 10,
  },
});