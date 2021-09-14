import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../img/userIcon.png')} style={styles.userImage} />
}

const styles = StyleSheet.create({
  userImage: {
    width: 100,
    height: 100,
    marginBottom:20
  },
})