import { StatusBar } from 'react-native';

import AppProviders from './app/providers/AppProviders';
import AppNavigator from './app/navigation/AppNavigator';

function AppContent() {
  return (
    <>
      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />

      <AppNavigator />
    </>
  );
}

export default function App() {
  return (
    <AppProviders>
      <AppContent />
    </AppProviders>
  );
}