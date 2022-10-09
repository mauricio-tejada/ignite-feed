import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
   --green: #00875F;
   --green-light: #00B37E;

   --gray1: #121214; //background
   --gray2: #202024; //cards
   --gray3: #323238; //divider
   --gray4: #7c7c8a; //placeholder
   --gray5: #8d8d99; //text-apoio
   --gray6: #c4c4cc; //text
   --gray7: #e1e1e6; //text-titles
   --white: #ffffff; 

   --danger: #f75a68;
}

:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--green-light);
}

* {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
}

html, body, input, textarea, button {
    font-family: "roboto",sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

body {
    background-color: var(--gray1);
}



`