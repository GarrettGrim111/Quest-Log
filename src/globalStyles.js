import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sansita Swashed', cursive, sans-serif;

}

body {
    
    background-image: url("/assets/9.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat; 
    background-size:  cover;
  
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  align-items: center;
  overflow: hidden;
  

}`;
