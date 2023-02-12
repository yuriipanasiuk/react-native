import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native';

import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import { PostsScreen } from './Nav/PostsScreen';
import { CreatePostsScreen } from './Nav/CreatePostsScreen';
import { CommentsScreen } from './Nav/CommentsScreen';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

export default function App() {
  const [user, setUser] = useState(false);
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  const [fontsLoaded] = useFonts({
    'Roboto-Regulat': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
    'Inter-Bold': require('../assets/fonts//Inter-Bold.ttf'),
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });

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

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/images/Photo-BG.jpg')}
      >
        {/* <RegistrationScreen /> */}
        {/* <LoginScreen /> */}
        {/* <PostsScreen /> */}
        {/* <CreatePostsScreen /> */}
        <CommentsScreen />
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
});
