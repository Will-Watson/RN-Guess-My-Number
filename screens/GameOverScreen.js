import { Text, StyleSheet, View, Image } from 'react-native'

import Title from '../components/ui/Title'

const GameOverScreen = () => {
  return (
    <View>
      <Title>GAME OVER!</Title>
      <Image />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 100,
  }
})

export default GameOverScreen;
