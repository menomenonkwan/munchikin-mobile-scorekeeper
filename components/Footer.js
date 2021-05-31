import Link from 'next/link';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background: var(--brown);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;

  a {
    text-decoration: none;
    color: var(--peach);
    font-size: 2rem;
  }

`;

const Footer = () => {
  return ( 
    <StyledNav>
      <Link href="/"><a>Players</a></Link>
      <Link href="/player"><a>Game</a></Link>
      <Link href="/dice"><a>Dice</a></Link>
    </StyledNav>
  );
}
 
export default Footer;
