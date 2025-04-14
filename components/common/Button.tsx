import { Pressable, Text } from 'react-native';

export default function Button({ title, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={{ backgroundColor: '#3498db', padding: 10, borderRadius: 5 }}
    >
      <Text style={{ color: 'white', textAlign: 'center' }}>{title}</Text>
    </Pressable>
  );
}