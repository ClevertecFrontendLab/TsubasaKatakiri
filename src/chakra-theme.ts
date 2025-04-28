import { extendTheme } from '@chakra-ui/react';

export const chakraTheme = extendTheme({
    colors: {
        lime: {
            50: '#ffffd3',
            100: '#eaffc7',
            150: '#d7ff94',
            300: '#c4ff61',
            400: '#b1ff2e',
            600: '#2db100',
            700: '#207e00',
            800: '#134b00',
        },
    },
    fonts: {
        heading: `'Inter', sans-serif`,
        body: `'Inter', sans-serif`,
    },
    components: {
        Switch: {
            baseStyle: {
                track: {
                    _checked: {
                        bg: '#B1FF2E',
                    },
                },
            },
        },
    },
});
