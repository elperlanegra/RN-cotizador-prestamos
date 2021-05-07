import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <Text>Formulario head</Text>
      </SafeAreaView>

      <View>
        <Text>Resultado</Text>
      </View>

      <View>
        <Text>Text Footer</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f00',
    height: 200,
    borderBottomLeftRadius: 30, // Para ponerlo redondo en la parte izquierda
    borderBottomRightRadius: 30,
  },
});
