// Vendors
import { createGlobalStyle, css } from "styled-components";

const FontsStyled = createGlobalStyle`
  /*
  * Inter Font Use
  */

  @font-face {
    font-family: 'Inter';
    font-weight: bold;
    src: local('Inter') format('ttf') url('/public/fonts/Inter/Inter-Bold.ttf');
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 600;
    src: local('Inter') format('ttf') url('/public/fonts/Inter/Inter-SemiBold.ttf');
  }

  @font-face {
    font-family: 'Inter';
    font-weight: normal;
    src: local('Inter') format('ttf') url('/public/fonts/Inter/Inter-Regular.ttf');
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 400;
    src: local('Inter') format('ttf') url('/public/fonts/Inter/Inter-Medium.ttf');
  }

  @font-face {
    font-family: 'Inter';
    font-weight: lighter;
    src: local('Inter') format('ttf') url('/public/fonts/Inter/Inter-Light.ttf');
  }

  /*
  * IBM Plex Mono Font Use
  */

  @font-face {
    font-family: 'IBMPlexMono';
    font-weight: bold;
    src: local('IBMPlexMono') format('ttf') url('/public/fonts/IBMPlexMono/IBMPlexMono-Bold.ttf');
  }

  @font-face {
    font-family: 'IBMPlexMono';
    font-weight: 600;
    src: local('IBMPlexMono') format('ttf') url('/public/fonts/IBMPlexMono/IBMPlexMono-SemiBold.ttf');
  }

  @font-face {
    font-family: 'IBMPlexMono';
    font-weight: normal;
    src: local('IBMPlexMono') format('ttf') url('/public/fonts/IBMPlexMono/IBMPlexMono-Regular.ttf');
  }

  @font-face {
    font-family: 'IBMPlexMono';
    font-weight: 400;
    src: local('IBMPlexMono') format('ttf') url('/public/fonts/IBMPlexMono/IBMPlexMono-Medium.ttf');
  }

  @font-face {
    font-family: 'IBMPlexMono';
    font-weight: lighter;
    src: local('IBMPlexMono') format('ttf') url('/public/fonts/IBMPlexMono/IBMPlexMono-Light.ttf');
  }
`;

const RootStyled = css`
  :root {
    --font-sansserif: 'Inter', sans-serif;
    --font-monospace: "IBMPlexMono", monospace;
  }

  [data-theme='light'] {
    --background: rgba(255, 255, 255, 1);
    --border-color: rgba(18, 18, 18, 1);
    --font-color: rgba(0, 0, 0, 1);
  }

  [data-theme='dark'] {
    --background: rgba(18, 18, 18, 1);
    --border-color: rgba(35, 35, 35, 1);
    --font-color: rgba(241, 241, 241, 1);
  }
`;

const GlobalStyled = createGlobalStyle`
  ${RootStyled}

  * {
    box-sizing: border-box;
  }

  html,
  body {
    background-color: var(--background);
    color: var(--font-color);
    font-family: var(--font-sansserif);
    margin: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
  }
`;

export {
  FontsStyled,
  GlobalStyled
}