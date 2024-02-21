import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthDetails from '../auth/AuthDetails';

function SubMenu({ title, items, openMenu, index, activeMenu }) {
  const isOpen = activeMenu === index;
  const menuRef = useRef(null);

  const toggle = () => openMenu(isOpen ? null : index);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        openMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMenu]);

  return (
    <MenuContainer ref={menuRef}>
      <MenuTitle onClick={toggle}>{title}</MenuTitle>
      {isOpen && (
        <SubMenuContainer className={isOpen ? 'open' : ''}>
          {items.map((item, index) => (
            <Link key={index} to={item.path} onClick={toggle}>
              {item.label}
            </Link>
          ))}
        </SubMenuContainer>
      )}
    </MenuContainer>
  );
}

function NavBar() {
  const [clicked, setClicked] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const isLogged = AuthDetails();

  const menu1Items = [
    { label: 'Opción 1', path: '/opcion1' },
    { label: 'Opción 2', path: '/opcion2' },
    // Agrega aquí más opciones si las necesitas
  ];

  const menu2Items = [
    { label: 'Opción A', path: '/opcionA' },
    { label: 'Opción B', path: '/opcionB' },
    // Agrega aquí más opciones si las necesitas
  ];

  return (
    <>
      <NavContainer>
        <h2>
          Responsive <span> NavBar</span>
        </h2>
        <MenusContainer>
          <SubMenu title="Menu 1" items={menu1Items} openMenu={setActiveMenu} index={0} activeMenu={activeMenu} />
          <SubMenu title="Menu 2" items={menu2Items} openMenu={setActiveMenu} index={1} activeMenu={activeMenu} />
        </MenusContainer>
        <AuthDetails/>
        {/* <div className="burguerButton">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv> */}
      </NavContainer>
    </>
  );
}

export default NavBar;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem;
  background-color: #333;
`;

const MenusContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

const MenuContainer = styled.div`
  position: relative;
`;

const MenuTitle = styled.a`
  cursor: pointer;
  color: white;
`;

const SubMenuContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.3s ease-in-out, height 0.3s ease-in-out;
  min-width: max-content;
  &.open {
    transform: scaleY(1);
  }
  a {
    display: block;
    white-space: nowrap;
  }
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
