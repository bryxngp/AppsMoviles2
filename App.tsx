import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottonTab from './navigations/BottomNavigator';
import StackNav from './navigations/StackNavigator';
import MainNow from './navigations/MainNavigator';

export default function App() {
  return (
    <MainNow />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e14a3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
