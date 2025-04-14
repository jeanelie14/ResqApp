import { useEffect } from 'react';
import * as Location from 'expo-location';

export function useLocation() {
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;
      const location = await Location.getCurrentPositionAsync({});
    })();
  }, []);
}