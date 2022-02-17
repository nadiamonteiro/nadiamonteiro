import styled from "styled-components";
import Link from 'next/link';
import Burger from "./Burger";

const Ul = styled.ul`
  list-style: none !important;
  display: flex !important;
  flex-flow: row nowrap !important;
  li {
    padding: 27px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap !important;
    background-color: #232323;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 40%;
    padding-top: 3rem;
    z-index: 200;
    transition: transform 0.3s ease-in-out;
    li {
      color: #614742;
    }
  }
`;

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  display: flex !important;
  justify-content: space-between;
  background-color: #232323;
  .logo {
    margin: 20px 15px 15px 15px;
  }
`

export default function NavBar({open}){
    return(
        <Nav>
            <Ul open={open} className="d-flex list-unstyled">
                <li><Link href="/"><a>WORK</a></Link></li>
                <Link href="/" class="logo ml-5">
                    <a className="logo">NADIA</a>
                </Link>
                <li><Link href="/"><a>ABOUT</a></Link></li>
                <li><Link href="/"><a>CONTACT</a></Link></li>
            </Ul>
            <Burger/>
        </Nav>
    )
}
