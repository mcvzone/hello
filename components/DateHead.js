import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#26a69a',
  },
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

function DateHead({date}) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formatDate = `${year}년 ${month}월 ${day}일`;
  const {top} = useSafeAreaInsets();

  console.log('top : ', top);

  return (
    <>
      <View style={[styles.statusBarPlaceholder, {height: top}]} />
      <StatusBar backgroundColor="#26a69a" />
      <View style={styles.block}>
        <Text stle={styles.dateText}>{formatDate}</Text>
      </View>
    </>
  );
}

export default DateHead;
