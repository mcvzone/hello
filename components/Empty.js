import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function Empty() {
  return (
    <View style={styles.block}>
      <Text style={styles.description}>Ok.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});

export default Empty;
