import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function AppProviders({children}) {
  return (
    <SafeAreaProvider>
      {children}
    </SafeAreaProvider>
  )
}
