import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as React from 'react';

interface Props {
  navigation: {
    navigate: (path: string) => void;
    push: (path: string) => void;
  }
}

export function Splash(props: Props) {
  console.log('999999999');
  console.log(props.navigation)
  return (
    <View style={styles.container} >
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

  },
  label: {
    fontSize: 30,
  },
  toText: {
    textAlign: 'center',
    padding: 10,
  },
});