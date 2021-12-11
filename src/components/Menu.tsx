/** @jsx jsx */
import {jsx} from '@emotion/react'
import {Fragment, useEffect, useRef} from 'react'
import * as theme from '../styles/theme'

import {css} from '@emotion/react'
import {useOutSideClick, useScreen} from '../utils/hooks'
import {ArrowBackIcon, ArrowNextIcon} from './Icons'
import {Link, useLocation} from 'react-router-dom'
import {useScroll} from '../utils/hooks/useScroll'

interface MenuItemType {
    name: string
    path: string
    icon: JSX.Element
    children?: Array<MenuItemType>
}

interface MenuItemProps extends MenuItemType {
    activeMenu?: string
    menuClick: (name: string | undefined) => void
}

const MenuItem = ({
                      name,
                      path,
                      icon,
                      children = [],
                      activeMenu,
                      menuClick
                  }: MenuItemProps) => {
    const menuChildrenRef = useRef<HTMLUListElement>(null)
    const {isMobile, isDesktop} = useScreen()
    const {top} = useScroll()

    const router = useLocation()

    // determines if main menu item on header is active or not for desktop only
    const active = router.pathname.includes(path)

    const setActiveMenu = () => {
        menuClick(name)
    }

    const removeActiveMenu = () => {
        menuClick(undefined)
    }

    useOutSideClick(
        menuChildrenRef,
        () => {
            if (isDesktop) {
                removeActiveMenu()
            }
        },
        true
    )

    // Dropdown position adjustment
    useEffect(() => {
        const windowWidth = document.body.clientWidth
        if (menuChildrenRef.current) {
            const right = menuChildrenRef.current.getBoundingClientRect().right
            if (windowWidth < right) {
                menuChildrenRef.current.style.left = windowWidth - right - 10 + 'px'
            }
        }
    }, [menuChildrenRef])

    return (
        <div css={styles} className={active ? 'active' : ''}>
            <div
                className={'menu-title-wrap'}
                hidden={isMobile && activeMenu !== undefined}
                onClick={setActiveMenu}
                onMouseOver={setActiveMenu}
            >
                {isMobile && icon}
                <span className={'menu-title'} style={{color: top > 50 ? 'black' : 'white'}}>{name}</span>
                {isMobile && (
                    <div className={'next-icon-wrap'}>
                        <ArrowNextIcon/>
                    </div>
                )}
            </div>
            <ul
                onMouseLeave={removeActiveMenu}
                data-open={activeMenu === name}
                ref={menuChildrenRef}
            >
                <div
                    className={'menu-title-wrap'}
                    hidden={isDesktop}
                    onClick={removeActiveMenu}
                >
                    <div className={'icon-back-wrap'}>
                        <ArrowBackIcon/>
                    </div>
                    {icon}
                    <span className={'menu-title'}>{name}</span>
                </div>

                {children.map((menuItem, index) => (
                    <Link to={menuItem.path} key={index.toString()}>
                        <li>
                            {menuItem.icon}
                            <span className={'menu-item-title'}>{menuItem.name}</span>
                            {isMobile && (
                                <div className={'next-icon-wrap'}>
                                    <ArrowNextIcon/>
                                </div>
                            )}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

interface MenuProps {
    menu: Array<MenuItemType>
    activeMenu?: string
    menuClick: (name: string | undefined) => void
}

export const Menu = ({menu = [], activeMenu, menuClick}: MenuProps) => {
    return (
        <Fragment>
            {menu.map((item, index) => (
                <MenuItem
                    {...item}
                    key={index.toString()}
                    activeMenu={activeMenu}
                    menuClick={menuClick}
                />
            ))}
        </Fragment>
    )
}
export default Menu

const styles = css`
  display: block;
  cursor: pointer;
  position: relative;
  z-index: 2;

  ${theme.MOBILE_MEDIA_QUERY} {
    width: 100%;
  }

  .menu-title-wrap {
    ${theme.MOBILE_MEDIA_QUERY} {
      display: flex;
      width: 100%;
      padding: 5px 8%;
      align-items: center;
      position: relative;
      z-index: 3;

      .icon {
        color: white;
        stroke: white;
        fill: white;
      }
    }

    .menu-title {
      color: white;
      font-weight: 400;
      align-items: center;

      &:hover {
        color: rgba(204, 202, 202, 0.4);
      }

      ${theme.MOBILE_MEDIA_QUERY} {
        margin-left: 10px;
        color: white;
        line-height: 40px;
      }
    }
  }

  .next-icon-wrap {
    margin-left: auto;

    .icon {
      stroke: ${theme.primaryLight};
      color: ${theme.primaryLight};
      fill: ${theme.primaryLight};
    }
  }

  &.active {
    .menu-title-wrap {
      .menu-title {
        font-weight: bold;
        color: ${theme.primary};

        &:hover {
          color: ${theme.primaryLight};
          fill: ${theme.primaryLight};
          stroke: ${theme.primaryLight};
        }

        ${theme.MOBILE_MEDIA_QUERY} {
          color: white;
          fill: white;
          stroke: white;
        }
      }
    }
  }

  ul {
    padding: 15px 0;
    z-index: 4;
    pointer-events: none;

    .menu-title-wrap {
      margin-bottom: 10px;

      .icon,
      .menu-title {
        color: ${theme.yellow} !important;
        stroke: ${theme.yellow};
        fill: ${theme.yellow};
        font-weight: bold;
      }

      .icon-back-wrap {
        margin-right: 10px;

        .icon {
          width: 13px;
          height: 12px;
          stroke: ${theme.primaryLight};
          color: ${theme.primaryLight};
          fill: ${theme.primaryLight};
        }
      }
    }

    ${theme.MIN_MOBILE_MEDIA_QUERY} {
      position: absolute;
      opacity: 0;
      width: 250px;
      top: 50px;
      background-color: white;
      box-shadow: ${theme.shadow};
      border-radius: 7px;
      transition: all 0.2s ease-out;
    }

    ${theme.MOBILE_MEDIA_QUERY} {
      width: 100vw;
      height: 100vh;
      background-color: ${theme.primary};
      position: fixed;
      left: -100vw;
      top: 0;
      padding-top: 24%;
      transition: left 0.2s ease-in;
    }

    &[data-open='true'] {
      opacity: 1;
      transition: all 0.3s ease-out;
      pointer-events: auto;

      ${theme.MOBILE_MEDIA_QUERY} {
        left: 0;
      }

      ${theme.MIN_MAIN_MEDIA_QUERY} {
        top: 30px;
      }
    }

    li {
      list-style: none;
      line-height: 40px;
      text-align: left;
      color: black;
      padding-left: 20px;
      display: flex;
      align-items: center;

      &:hover {
        background-color: #00000012;
      }

      ${theme.MOBILE_MEDIA_QUERY} {
        display: flex;
        align-items: center;
        padding: 8px 8%;
        color: white;

        .icon {
          color: white;
          stroke: white;
          fill: white;
        }
      }
    }
  }

  .menu-item-title {
    padding-left: 8px;
  }
`
