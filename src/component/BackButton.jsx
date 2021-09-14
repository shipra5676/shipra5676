import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'


export default function BackButton({ goBack }) {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../img/backBtn.png')}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -40,
    left: 4,
    zIndex:1
  },
  image: {
    width: 24,
    height: 24,
  },
})
