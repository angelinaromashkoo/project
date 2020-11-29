import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
  const name = 'Angelina';

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>Getting started with react native</Text>
      <Text style={styles.nameStyle}>{`My name is ${name}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: 45,
  },
  nameStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
