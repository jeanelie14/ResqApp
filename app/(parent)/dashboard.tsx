import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function ParentDashboard() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Parent Dashboard</Text>
      <Link href="/children-map" style={{ marginTop: 10, color: 'blue' }}>View Child Location</Link>
    </View>
  );
}