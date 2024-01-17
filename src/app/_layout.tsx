import '../../tamagui.css'

import { TamaguiProvider } from '@tamagui/core'
import { Slot } from 'expo-router'
import { useColorScheme } from 'react-native'

import appConfig from '../../tamagui.config'

export default function AppLayout() {
    const colorScheme = useColorScheme()

    return (
        <TamaguiProvider config={appConfig} defaultTheme={colorScheme ?? ''}>
            <Slot />
        </TamaguiProvider>
    )
}
