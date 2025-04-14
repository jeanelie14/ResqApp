import { View, Button } from 'react-native';

export default function Emergency() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="SOS ALERT" color="red" onPress={() => alert('SOS Sent!')} />
    </View>
  );
}