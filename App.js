import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native';
import colors from './components/utils/colors';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />

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
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30, // Para ponerlo redondo en la parte izquierda
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
});
