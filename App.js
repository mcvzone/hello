/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import DateHead from './components/DateHead';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import TodoItem from './components/TodoItem';
import Empty from './components/Empty';

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

const App = () => {
  const today = new Date();
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <DateHead date={today} />
        <Empty />
        <TodoItem />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
