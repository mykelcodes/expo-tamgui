import { styled, View } from '@tamagui/core'
import { Platform, Pressable } from 'react-native'

export function Button() {
    return Platform.select({
        ios: () => (
            <Pressable>
                <StyledView />
            </Pressable>
        ),
        default: () => <View />,
    })
}

const StyledView = styled(View, {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$1',
    variants: {
        size: {
            small: {
                '$platform-ios': {
                    paddingHorizontal: 10,
                    paddingVertical: '$1',
                    borderRadius: 40,
                },
            },
            medium: {
                '$platform-ios': {
                    paddingHorizontal: 14,
                    paddingVertical: 7,
                    borderRadius: 40,
                },
            },
            large: {
                '$platform-ios': {
                    paddingHorizontal: '$5',
                    paddingVertical: 14,
                    borderRadius: 12,
                },
            },
        },
    },
})
