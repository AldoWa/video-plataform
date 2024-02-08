import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      product: {
        green_dark: string,
        green: string,
        green_light: string,
        blue: string,
        warning: string,
        danger: string,
      },
      base: {
        background: string,
        elements: string,
        stroke_divider: string,
        title: string,
        text: string,
        text_apoio: string,
        white: string,
      }
    },
    font: {
      weigth: {
        regular: number,
        semi_bold: number,
        bold: number,
      },
      sizes: {
        12: string,
        14: string,
        16: string,
        18: string,
        24: string,
        40: string,
      }
    }
  }
}