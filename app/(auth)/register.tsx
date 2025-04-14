import { View, Text, TextInput, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Register() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text>Register</Text>
      <TextInput placeholder="Email" style={{ borderWidth: 1, padding: 10, marginBottom: 10 }} />
      <TextInput placeholder="Password" secureTextEntry style={{ borderWidth: 1, padding: 10, marginBottom: 10 }} />
      <Button title="Register" onPress={() => {}} />
      <Link href="/login" style={{ marginTop: 10, color: 'blue' }}>Go to Login</Link>
    </View>
  );
}