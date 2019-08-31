import React from 'react';

import { View, TouchableOpacity, Text, StyleSheet, StatusBar} from 'react-native';

const categoryGridTile = props => {

    return (
        <TouchableOpacity
        style={styles.gridItem}
        onPress={props.onSelect}>
             <StatusBar barStyle="light-content" /> 
         <View style={{ ...styles.container, ...{backgroundColor: props.color} }}>
             <Text style={styles.title} numberOfLines={2}>{props.title}</Text>

         </View>
      </TouchableOpacity>
    )
   
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
      },
      container: {
          flex: 1,
          borderRadius: 10,
          shadowColor: 'black',
          shadowOpacity: 0.26,
          shadowOffset: {width: 0, height: 2},
          shadowRadius: 10,
          elevation: 3,
          padding: 15,
          justifyContent: 'flex-end',
          alignItems: 'flex-end'
      },
      title: {
          fontFamily: 'open-sans-bold',
          fontSize: 16
      }

})

export default categoryGridTile;