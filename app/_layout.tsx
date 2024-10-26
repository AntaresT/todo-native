import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import 'react-native-reanimated';
import { Inter_400Regular } from "@expo-google-fonts/inter";
import * as NavigationBar from 'expo-navigation-bar';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({inter400: Inter_400Regular});

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    
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

  }, [loaded]);

  if (!loaded) {
    return null;
  }

  

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
