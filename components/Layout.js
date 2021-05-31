import Footer from "./Footer";
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    --offWhite: #D7D9C8;
    --brown: #3C6B7F;
    --peach: #E5C295;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    --ts: 1px 1px 1px rgba(0,0,0,0.75);
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 62.5%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background: var(--peach);
    font-family: "Chelsea Market", -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
    padding: 0;
    margin: auto;
    font-size: 1.5rem;
    line-height:2;
  }
`;

export default function Layout({ children }) {
  
  return (
    <div>
      <GlobalStyles />
      <div>{children}</div>
      <Footer />
    </div>
  );
}