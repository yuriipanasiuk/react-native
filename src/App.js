import { NavigationContainer } from '@react-navigation/native';

import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useRoute } from './router';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

export default function App() {
  const [isLogIn, setIsLogIn] = useState(true);
  // const [dimensions, setDimensions] = useState({
  //   window: windowDimensions,
  //   screen: screenDimensions,
  // });
  const routing = useRoute(isLogIn);

  const [fontsLoaded] = useFonts({
    'Roboto-Regulat': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
    'Inter-Bold': require('../assets/fonts//Inter-Bold.ttf'),
  });

  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener(
  //     'change',
  //     ({ window, screen }) => {
  //       setDimensions({ window, screen });
  //     }
  //   );
  //   return () => subscription?.remove();
  // });

  useEffect(() => {
    async function prepare() {
      SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
