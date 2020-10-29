import 'styled-components';

declare module 'styled-components' {
  
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      text: string;

      areaCard?: string,
      card: string,

      boxShadow?: any;

      switch: {
        on: string;
        off: string;
      }
    },
  }
}