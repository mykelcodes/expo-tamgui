const { withTamagui } = require('@tamagui/metro-plugin')
const { getDefaultConfig } = require('expo/metro-config')

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
    // [Web-only]: Enables CSS support in Metro.

    isCSSEnabled: true,
})

config.resolver.sourceExts.push('mjs')

module.exports = withTamagui(config, {
    components: ['@tamagui/core'],

    config: './tamagui.config.ts',

    outputCSS: './tamagui.css',
})
