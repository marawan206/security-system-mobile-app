import React, { useEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font';
import { Stack,Redirect  } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './login';
import { useRouter } from 'expo-router';
// export {
//   ErrorBoundary,
// } from 'expo-router';

// No need for unstable_settings here anymore
// Remove this if you're setting initialRouteName directly in Stack.

SplashScreen.preventAutoHideAsync();

function IndexPage() {
  const router = useRouter();
  return <Redirect href="/login" />;
//  // router.replace('/login');
//   return 0;
};
export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null; // Render nothing while fonts load
  }

  const colorScheme = useColorScheme() || 'light'; // Ensure default value
  return (
  
    <AuthProvider>
      <IndexPage/>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        
        <Stack initialRouteName="login">
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
      </ThemeProvider>
    </AuthProvider>
  );
}


