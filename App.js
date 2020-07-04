import _ from 'lodash';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const values = _.range(3000).map(it => ({ key: `${ it }` }));

export default FlatListBasics = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={values}
          renderItem={({item}) => {
            return (
              <Text style={styles.item}>{item.key}</Text>
            );
          }}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});