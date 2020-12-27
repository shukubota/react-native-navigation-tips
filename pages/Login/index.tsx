import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as React from 'react';

interface Props {
  navigation: {
    navigate: (path: string) => void;
    push: (path: string) => void;
  }
}

export function Login(props: Props) {
  console.log(props)
  console.log('login')
  return (
    <View style={styles.container} >
      <TouchableOpacity
        onPress={() => props.navigation.push('Splash')}
      >
        <Text style={styles.toText} >to Splash</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 30,
    margin: 'auto',
  },
  toText: {
    textAlign: 'center',
    padding: 10,
  },
});