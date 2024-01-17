import { ExpoConfig } from '@expo/config'

const config: ExpoConfig = {
    name: 'expo-tamagui',
    slug: 'expo-tamagui',
    scheme: 'expo-tamagui',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    splash: {
        image: './assets/splash.png',
        resizeMode: 'contain',
        backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
        supportsTablet: true,
    },
    android: {
        adaptiveIcon: {
            foregroundImage: './assets/adaptive-icon.png',
            backgroundColor: '#ffffff',
        },
    },
    web: {
        favicon: './assets/favicon.png',
        bundler: 'metro',
    },
    plugins: ['expo-router'],
}

export default config
