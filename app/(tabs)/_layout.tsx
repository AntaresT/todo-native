import { Tabs } from 'expo-router';
import React, { useEffect } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import * as NavigationBar from 'expo-navigation-bar';
import { TodoProvider } from '@/providers/todoProvider';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    const timer = setTimeout(async () => {
      const isVisible = await NavigationBar.getVisibilityAsync();
      if (isVisible === 'visible') {
        NavigationBar.setVisibilityAsync('hidden');
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
      NavigationBar.setVisibilityAsync('visible');
    };
  }, []);

  return (
    <TodoProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarStyle: {
            alignContent: "center",
            height: 66,
            backgroundColor: Colors.dark.background,
            },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            marginBottom: 10,
            }
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Nova tarefa',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'add' : 'add-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="tasks"
          options={{
            title: 'Tarefas',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
            ),
          }}
        />
      </Tabs>
    </TodoProvider>

  );
}
