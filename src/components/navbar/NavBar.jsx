import React, { useState } from "react";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";

function NavBar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    //Cuando está true lo tira a false y viceversa
    setClicked(!clicked);
  };

  return (
    <>
      <NavContainer>
        <h2>
          Responsive <span> NavBar</span>
        </h2>
        <div className={`links ${clicked ? "active" : ""}`}>
          <a onClick= {handleClick} href="/">Home</a>
          <a onClick= {handleClick} href="/Database">Base de datos</a>
          <a onClick= {handleClick} href="/GetRandomCard">Carta aleatoria</a>
        </div>
        <div className="burguerButton">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}

export default NavBar;

const NavContainer = styled.nav`
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }

  .burguerButton {
    @media (min-width: 768px) {
      display: none;
    }
  }

  .links {
    transition: all .5s ease;
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    a {
      color: white;
      font-size: 1rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }

  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }

  padding: 0.4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BgDiv = styled.div`
  position: absolute;
  background-color: black;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease;
  &.active {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0 0 80% 0;
  }
`;
