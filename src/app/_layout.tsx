import '../../tamagui.css'

import { TamaguiProvider } from '@tamagui/core'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import { useColorScheme } from 'react-native'

import appConfig from '../../tamagui.config'

SplashScreen.preventAutoHideAsync()

export default function AppLayout() {
    const colorScheme = useColorScheme()

    const [loaded] = useFonts({
        FiraCode: require('../../assets/fonts/FiraCode-Regular.ttf'),
        FiraCodeBold: require('../../assets/fonts/FiraCode-Bold.ttf'),
    })

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded])

    if (!loaded) {
        return null
    }

    return (
        <TamaguiProvider config={appConfig} defaultTheme={colorScheme ?? ''}>
            <Stack />
        </TamaguiProvider>
    )
}
