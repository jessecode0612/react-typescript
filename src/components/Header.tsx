/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState } from 'react'
import * as theme from '../styles/theme'

import {Link} from 'react-router-dom'
import { css } from '@emotion/react'
import Button from './Button'
import { useScreen } from '../utils/hooks'

import {
  AddCircleOutlineIcon,
  MovingIcon,
  HamburgerIcon,
  ArrowNextIcon
} from './Icons'
import Menu from './Menu'

const menuList = [
  {
    name: 'Modules',
    path: '/modules',
    icon: <MovingIcon />,
    children: [
      {
        name: 'Simple API',
        path: '/module/simple-api',
        icon: <ArrowNextIcon />
      }
    ]
  }
]

export default function Header() {
  const { isMobile, isDesktop } = useScreen()

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  // determines if which mobile menu is opened for responsive only
  const [activeMenu, setActiveMenu] = useState<string | undefined>(undefined)

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState)
    setActiveMenu(undefined)
  }

  const handleMenuClick = (menuName: string | undefined) => {
    setActiveMenu(menuName)
  }

  return (
    <header className={'container'} css={styles.header}>
      <div className={'mobile-menu-toggle'} onClick={toggleMobileMenu}>
        <HamburgerIcon />
      </div>
      <Link css={styles.logoWrap} to="/" >
        <div css={styles.logoWrap}>
          <strong css={styles.title} hidden={isMobile}>
            REACT TYPESCRIPT
          </strong>
        </div>
      </Link>
      <div css={styles.menuWrap} className={mobileMenuOpen ? 'open' : ''}>
        <div className={'close-menu-wrap'} hidden={isDesktop}>
          <strong className={'close-menu'} onClick={toggleMobileMenu}>
            Close
          </strong>
        </div>

        <Menu
          menu={menuList}
          activeMenu={activeMenu}
          menuClick={handleMenuClick}
        />

        <Button
          transparent={isMobile}
          secondary={isMobile}
          className={'btn-create-new'}
        >
          <AddCircleOutlineIcon />
          <span css={styles.createButtonTitle}>Get Started</span>
        </Button>
      </div>
    </header>
  )
}

const styles = {
  header: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    text-align: center;
    width: 100%;
    margin: auto;
    position: relative;
    height: 70px;

    ${theme.MOBILE_MEDIA_QUERY} {
      justify-content: center;
    }

    .mobile-menu-toggle {
      display: none;
      position: absolute;
      left: 15px;
      padding: 4px;

      ${theme.MOBILE_MEDIA_QUERY} {
        display: block;
      }
    }
  `,
  logoWrap: css`
    width: max-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    ${theme.MAIN_MEDIA_QUERY} {
      overflow: hidden;
    }
  `,
  title: css`
    font-size: 1.6rem;

    ${theme.MAIN_MEDIA_QUERY} {
      font-size: 1rem;
    }
  `,
  logo: css`
    width: 45px;
    height: 26px;
    margin-right: 10px;

    ${theme.MIN_MAIN_MEDIA_QUERY} {
      object-fit: contain;
      height: 35px;
    }
  `,
  menuWrap: css`
    display: flex;
    flex-direction: row;
    align-items: center;

    & > * {
      margin-left: 30px;

      ${theme.DEFAULT_MEDIA_QUERY} {
        margin-left: 15px;
      }
    }

    ${theme.MOBILE_MEDIA_QUERY} {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: ${theme.primary};
      z-index: 100;
      flex-direction: column;
      padding: 8% 0;
      transform: translateY(-100vh);
      transition: transform 0.2s ease-in;

      &.open {
        transform: translateY(0);
        transition: all 0.3s ease-out;
      }

      & > * {
        margin-left: 0;
      }

      .btn-create-new {
        margin-top: auto;
        width: 84%;
      }
    }

    .close-menu-wrap {
      width: 100%;
      justify-content: flex-end;
      display: flex;
      z-index: 3;

      .close-menu {
        line-height: 50px;
        color: ${theme.yellow};
        margin-right: 8%;
      }
    }
  `,
  createButtonTitle: css`
    margin-left: 5px;
  `
}
