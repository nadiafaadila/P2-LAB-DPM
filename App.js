import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Halo, Saya Nadia Fadila. </Text>

      {/* Dua kotak dengan tata letak horizontal */}
      <View style={styles.boxContainer}>
        <View style={[styles.box, { backgroundColor: 'pink' }]} /> {/* Kotak 1 dengan warna pink */}
        <View style={[styles.box, { backgroundColor: 'skyblue' }]} /> {/* Kotak 2 dengan warna biru langit */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', // Latar belakang abu-abu terang
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 50, // Spasi antara teks dan kotak
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', // Lebar untuk memberi ruang di antara kotak
  },
  box: {
    width: 100,
    height: 100,
  },
});
