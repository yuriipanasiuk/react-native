import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

import { TouchableOpacity, View, StyleSheet } from 'react-native';

import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import { PostsScreen } from './Screens/NavScreens/PostsScreen';
import { CreatePostsScreen } from './Screens/NavScreens/CreatePostsScreen';
import { CommentsScreen } from './Screens/NavScreens/CommentsScreen';
import Home from './Screens/Home/Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const useRoute = isAuth => {
  if (!isAuth) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Registration"
          component={RegistrationScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.8} style={{ paddingRight: 16 }}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                ...styles.btn,
                backgroundColor: focused ? '#FF6C00' : 'transparent',
              }}
            >
              <Feather
                name="grid"
                size={24}
                color={focused ? '#ffffff' : '#212121'}
                focused={focused}
              />
            </View>
          ),

          headerTitle: `Публикации `,
          navigationOptions: {
            headerBackTitle: 'some label',
          },

          headerLeft: () => {
            <Feather name="log-out" />;
          },
        }}
        name="PostsScreen"
        component={PostsScreen}
      />
      <Tab.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity activeOpacity={0.8} style={{ paddingLeft: 16 }}>
              <Feather name="arrow-left" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarShowLabel: false,
          headerTitle: 'Создать публикацию',
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                ...styles.btn,
                backgroundColor: focused ? '#FF6C00' : 'transparent',
              }}
            >
              <AntDesign
                name="plus"
                size={24}
                color={focused ? '#ffffff' : '#212121'}
                focused={focused}
              />
            </View>
          ),
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
      <Tab.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity activeOpacity={0.8} style={{ paddingLeft: 16 }}>
              <Feather name="arrow-left" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarShowLabel: false,
          headerTitle: 'Комментарии',
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                ...styles.btn,
                backgroundColor: focused ? '#FF6C00' : 'transparent',
              }}
            >
              <AntDesign
                name="user"
                size={24}
                color={focused ? '#ffffff' : '#212121'}
                focused={focused}
              />
            </View>
          ),
        }}
        name="CommentsScreen"
        component={CommentsScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 70,
    height: 40,
    borderRadius: 20,
  },
});
