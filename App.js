import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponents from './components/HeaderComponents';
import FooterComponent from './components/FooterComponent';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponents />
      <FooterComponent />
      <StatusBar style='light' />
    </SafeAreaView>
  );
}

// this style is built in component called StyleSheet that allows us to create styles or components
// it is a built in component that allows us to create styles for our components
//flex: 1,// flex 1 allows the component to take up the entire screen
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});
