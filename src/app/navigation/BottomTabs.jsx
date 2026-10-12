import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../features/home/screens/HomeScreen';
import ExploreScreen from '../../features/explore/screens/ExploreScreen';
import ProfileScreen from '../../features/profile/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTintColor: '#111827',
        headerTitleStyle: {
          fontWeight: '600',
        },
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#6B7280',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E5E7EB',
          paddingTop: 5,
          paddingBottom: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
      <Tab.Screen name="Explore" component={ExploreScreen} options={{ title: 'Explore' }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }}/>
    </Tab.Navigator>
  );
}