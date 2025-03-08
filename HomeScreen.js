import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/pop.png')} style={styles.imgedit} />
      <View style={styles.section}>
        <Text style={styles.font}>SKILLPIN</Text>
      </View>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Second')}
      >
        <Text style={styles.buttonText}></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#040404',
  },
  font: {
    fontSize: 32,
    fontFamily: 'RobotoMono-Italic-VariableFont_wght',
    fontWeight: 'bold',
    color:"#6B6B6B"
  },
  imgedit: {
    height: 102,
    width: 102,
    resizeMode: 'contain',
  },
  section: {
    margin: 2,
    borderWidth: 2,
    borderColor:"#6B6B6B"
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
