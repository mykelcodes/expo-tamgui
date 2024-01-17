import { Text, View } from '@tamagui/core'
import { StatusBar } from 'expo-status-bar'
import { Alert, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
    return (
        <SafeAreaView edges={['top']} style={{ flex: 1 }}>
            <View backgroundColor="$background" flex={1} gap="$4" $sm={{ backgroundColor: 'red' }}>
                <Text color="$foreground">Open up App.tsx to start working on your app!</Text>
                <Button title="Button" onPress={() => Alert.alert('button pressed')} />
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    )
}
