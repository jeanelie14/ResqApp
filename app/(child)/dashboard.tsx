import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function ChildDashboard() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Child Dashboard</Text>
      <Link href="/emergency" style={{ marginTop: 10, color: 'red' }}>EMERGENCY</Link>
    </View>
  );
}