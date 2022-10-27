import React from 'react';

import {StyleSheet, View} from 'react-native';

function TodoItem() {
  return <View style={styles.block} />;
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'red',
    height: 64,
  },
});

export default TodoItem;
