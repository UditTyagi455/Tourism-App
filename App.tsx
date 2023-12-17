import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer,DarkTheme,DefaultTheme} from '@react-navigation/native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import NavigationScreen from './src/navigation';
import { useSelector } from 'react-redux';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const themeColor = useSelector(state => state.theme.theme);
  const theme = useColorScheme();

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <NavigationContainer theme={themeColor === 'dark' ? DarkTheme : DefaultTheme}>
      <NavigationScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
