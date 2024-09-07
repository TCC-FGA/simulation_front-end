import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommonActions } from '@react-navigation/native';
import React from 'react';
import { BottomNavigation, Icon } from 'react-native-paper';

import { Dashboard, AccountSettingsScreen, PropertiesScreen } from '../screens';

import Cog from '@assets/cog.svg';
import Home from '@assets/home.svg';
import HomeCity from '@assets/home-city.svg';

const Tab = createBottomTabNavigator();

function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.name;

            return typeof label === 'string' ? label : undefined;
          }}
        />
      )}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => {
            return <Icon source={Home} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Propriedades"
        component={PropertiesScreen}
        options={{
          tabBarLabel: 'Propriedades',
          tabBarIcon: ({ color, size }) => {
            return <Icon source={HomeCity} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={AccountSettingsScreen}
        options={{
          tabBarLabel: 'Conta',
          tabBarIcon: ({ color, size }) => {
            return <Icon source={Cog} size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default AppRoutes;
