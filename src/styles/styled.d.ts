import 'styled-components';

declare module 'styled-components' {
  
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      text: string;

      areaCard?: '#999',
      card: '#444',

      switch: {
        on: string;
        off: string;
      }
    },
  }
}