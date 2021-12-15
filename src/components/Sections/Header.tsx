/** @jsx jsx */
import {jsx} from '@emotion/react'
import {useState} from 'react'
import * as theme from '../../styles/theme'

import {Link} from 'react-router-dom'
import {css} from '@emotion/react'
import Button from '../Button'
import {useScreen} from '../../utils/hooks'

import {
    AddCircleOutlineIcon,
    MovingIcon,
    HamburgerIcon,
    ArrowNextIcon
} from '../Icons'
import Menu from '../Menu'
import {useScroll} from '../../utils/hooks'

const menuList = [
    {
        name: 'Document',
        path: '/docs'
    },
    {
        name: 'Samples',
        icon: <MovingIcon/>,
        list: [
            { name: 'Simple API', path: '/samples/simple-api', icon: <ArrowNextIcon/> },
            { name: 'Resizable', path: '/samples/resizable', icon: <ArrowNextIcon/> },
            { name: 'Toaster', path: '/samples/toaster', icon: <ArrowNextIcon/> },
            { name: 'Carousel', path: '/samples/carousel', icon: <ArrowNextIcon/> },
        ]
    }
]

export default function Header() {
    const {isMobile, isDesktop} = useScreen()
    const {top} = useScroll()

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
        <header css={styles} data-background={top > 50}>
            <div className="container header">
                <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    <HamburgerIcon/>
                </div>
                <Link className="logoWrap" to="/">
                    <div className="logoWrap">
                        <strong className="title" hidden={isMobile}>
                            BP
                        </strong>
                    </div>
                </Link>
                <div className={(mobileMenuOpen ? 'open' : '') + " menuWrap"}>
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
                        <AddCircleOutlineIcon/>
                        <span className="createButtonTitle">Get Started</span>
                    </Button>
                </div>
            </div>
        </header>
    )
}

const styles = css`
  background-color: #00000000;
  transition: background-color .5s ${theme.transitionEasing};
  color: white;
  fill: white;
  top: 18px;
  height: 60px;

  &[data-background="true"] {
    background-color: #ffffff;
    transition: background-color .5s ${theme.transitionEasing};
    box-shadow: ${theme.shadow};
    color: black;
    fill: black;
  }
  
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    text-align: center;
    width: 100%;
    margin: auto;

    ${theme.MOBILE_MEDIA_QUERY} {
      justify-content: center;
    }

    .mobile-menu-toggle {
      display: none;
      position: absolute;
      left: 15px;
      padding: 4px;
      top: 20px;

      ${theme.MOBILE_MEDIA_QUERY} {
        display: block;
      }
    }
  }

  .logoWrap {
    width: max-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    ${theme.MAIN_MEDIA_QUERY} {
      overflow: hidden;
    }
  }

  .title {
    font-size: 1.6rem;
    color: white;

    ${theme.MAIN_MEDIA_QUERY} {
      font-size: 1rem;
    }
  }

  &[data-background="true"] {
    .title {
      color: black;
    }
  }

  .logo {
    width: 45px;
    height: 26px;
    margin-right: 10px;

    ${theme.MIN_MAIN_MEDIA_QUERY} {
      object-fit: contain;
      height: 35px;
    }
  }

  .menuWrap {
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
  }

  .createButtonTitle {
    margin-left: 5px;
  }
`