import { Image, StyleSheet, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/partial-react-logo.png')}
        style={styles.reactLogo}
      />
      <Text style={styles.title}>Welcome!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  reactLogo: {
    height: 150,
    width: 150,
  },
  title: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});