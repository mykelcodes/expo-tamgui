import { createFont, createTamagui, createTokens } from '@tamagui/core'
import { createMedia } from '@tamagui/react-native-media-driver'

const tokens = createTokens({
    color: {
        primary: '#000000',
        secondary: '#ffffff',
    },
    space: {
        0: 0,
        1: 4,
        2: 8,
        3: 12,
        4: 16,
        5: 24,
    },
    size: {
        0: 0,
        1: 4,
        2: 8,
        3: 12,
        4: 16,
        5: 24,
        20: 80,
        25: 100,
        50: 200,
    },
    radius: {},
    zIndex: {},
})

const appConfig = createTamagui({
    tokens,
    themes: {
        light: {
            background: tokens.color.secondary,
            foreground: tokens.color.primary,
        },
        dark: {
            background: tokens.color.primary,
            foreground: tokens.color.secondary,
        },
    },
    fonts: {
        body: createFont({
            family: 'FiraCode',
            size: {
                1: 12,
                2: 14,
                3: 15,
            },
            weight: {
                4: '400',
                7: '700',
            },
            face: {
                '400': { normal: 'FiraCode' },
                '700': { normal: 'FiraCodeBold' },
            },
        }),
    },
    media: createMedia({
        sm: { minWidth: 640 },
        md: { minWidth: 768 },
        lg: { minWidth: 1024 },
        xl: { minWidth: 1280 },
    }),
})

export type AppConfig = typeof appConfig

declare module '@tamagui/core' {
    interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig
