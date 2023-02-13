import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

import { TouchableOpacity } from 'react-native';
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
              <Feather name="log-out" size={24} color="#212121" />
            </TouchableOpacity>
          ),
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Feather name="grid" size={24} color="#212121" focused={focused} />
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
          tabBarShowLabel: false,
          headerTitle: 'Создать публикацию',
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="plus" size={24} color="#212121" focused={true} />
          ),
          tabBarIconStyle: { color: 'red' },
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          headerTitle: 'Комментарии',
          tabBarIcon: ({ focused, color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
        name="CommentsScreen"
        component={CommentsScreen}
      />
    </Tab.Navigator>
  );
};
