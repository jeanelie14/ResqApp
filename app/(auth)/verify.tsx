import { View, Text, Button } from 'react-native';

export default function Verify() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Verify your email</Text>
      <Button title="Resend Code" onPress={() => {}} />
    </View>
  );
}