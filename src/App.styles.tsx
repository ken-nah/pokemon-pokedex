import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
     --color-white: #fff;
     --color-dark-blue: #233240;
     --color-dark-gray: #808080;
     --color-light-gray: #f2f2f2;
     --color-pale-green: #84F280;
     --color-orange: #F27B35;
     --color-salmon-red: #F21B42;
     --text-color: #0d0d0d;
     --font-primary: 'Open Sans', sans-serif;
    }

    /* Resets */
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    *:focus {
      outline: none;
    }

    html {
     box-sizing: border-box;
     font-size: 62.5%; /* 10px / 16px = 62.5% , therefore 1rem = 10px */
     scroll-behavior: smooth;
   }

   body {
     background-color: var(--color-white);
     color: var(--text-color);
     font-family: var(--font-primary);
     font-size: 1.5rem;
     font-weight: 400;
     line-height: 1.5;
     overflow-x: hidden;
     position: relative;
   }

   h1, h2, h3, h4 {
     color: var(--color-dark-blue);
   }

   h1, h2 {
     font-weight: 700;
   }

   h3, h4 {
     font-weight: 500;
   }

   a {
     text-decoration: none;
     cursor: pointer;
     color: currentColor;
   }

   ul {
     list-style: none;
   }

   img {
     max-width: 100%;
     display: block;
     max-height: 100%;
     object-fit: fill;
   }

   input,
   button {
     font-family: inherit;
     font-weight: inherit;
     outline: 0;
     border: 0;
     color: inherit;
   }

   input::placeholder {
     font-size: 1.2rem;
   }
`;

export default GlobalStyles;
