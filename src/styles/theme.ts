export const primaryColor = '#0103f3'
export const primaryDarkColor = '#02037a'
export const primaryLightColor = '#d4d4e8'
export const primaryLighterColor = '#dddded'
export const secondaryColor = '#f7f6f3'
export const textColor = '#323e48'
export const headerColor = '#2c363f'
export const mainBorderColor ='#e6e9e9'
export const linkColor = primaryColor
export const linkColorDark = primaryLightColor
export const mainBackgroundColor = '#ffffff'
export const codeBackgroundColor = primaryLighterColor

export const primary = primaryColor
export const primaryDark = primaryDarkColor
export const primaryLight = '#7D7EB9'
export const primaryLighter = primaryLighterColor
export const primaryLightest = '#ede2fd'
export const secondary = secondaryColor
export const grayDark = '#191919'
export const grayLight = '#b0b2b2'
export const grayLighter = '#f7f6f3'
export const yellow = '#facc5f'
export const green = '#daffcc'
export const greenDark = '#228000'

export const mainBackground = mainBackgroundColor
export const mainBackgroundDark = textColor
export const stickyNavBackground = 'white'
export const stickyNavBackgroundDark = textColor
export const text = textColor
export const textLight = textColor
export const textError = '#ea2e31'
export const textDarkBg = '#ffffff'
export const navFullColumnDark = primaryColor

export const header = headerColor
export const buttonBackground = primary
export const buttonBackgroundHover = primaryColor
export const buttonBackgroundDark = primaryLight
export const buttonBackgroundDarkHover = primaryLightColor
export const mainBorder = mainBorderColor
export const mainBorderDark = '#505757'
export const pricingBorder = primaryColor
export const dashedBorderHorizontal = `url("data:image/svg+xml,%3csvg width='100%25' height='2' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='4' fill='none' stroke='%23eceded' stroke-width='4' stroke-dasharray='10%2c10' stroke-dashoffset='4' stroke-linecap='square'/%3e%3c/svg%3e")`
export const dashedBorderVertical = `url("data:image/svg+xml,%3csvg width='2' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='4' height='100%25' fill='none' stroke='%23eceded' stroke-width='4' stroke-dasharray='10%2c10' stroke-dashoffset='4' stroke-linecap='square'/%3e%3c/svg%3e")`
export const dashedBorder = `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23eceded' stroke-width='4' stroke-dasharray='10%2c10' stroke-dashoffset='4' stroke-linecap='square'/%3e%3c/svg%3e")`

export const transitionEasing = 'cubic-bezier(0.77, 0.41, 0.2, 0.84)'
export const bubbleEasing = 'cubic-bezier(0.3, 0.55, 0.54, 0.86)'

export const error = '#ea2f5e'
export const codeBackground = codeBackgroundColor.toString()

export const link = linkColor
export const linkVisited = linkColor
export const linkHover = linkColor
export const linkActive = linkColor
export const linkDark = linkColorDark
export const linkDarkHover = linkColorDark
export const linkDarkActive = linkColorDark

export const linkSecondary = secondaryColor
export const linkSecondaryVisited = secondaryColor
export const linkSecondaryHover = secondaryColor
export const linkSecondaryActive = secondaryColor

export const linkStickyNav = '#8da6e3'
export const linkStickyNavHover = linkHover
export const linkStickyNavActive = link

export const LARGER_DISPLAY_WIDTH = 1600
export const LARGE_DISPLAY_WIDTH = 1280
export const DEFAULT_WIDTH = 980
export const TABLET_WIDTH = 768
export const MOBILE_WIDTH = 480

export const MIN_SIDEBAR_WIDTH = '250px'
export const MAX_SIDEBAR_WIDTH = '280px'
export const MIN_TEXT_WIDTH = '608px'
export const MAX_TEXT_WIDTH = '1175px'
export const MAX_BLOG_TEXT_WIDTH = '850px'
export const MAX_LOGIN_WIDTH = '1280px'

export const ieBreakpoint =
    '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)'

export const ieBreakpointMinDefault = `@media all and (-ms-high-contrast: none) and (min-width:${DEFAULT_WIDTH}px), (-ms-high-contrast: active) and (min-width:${DEFAULT_WIDTH}px)`

export const ieBreakpointMinLarge = `@media all and (-ms-high-contrast: none) and (min-width:${LARGE_DISPLAY_WIDTH}px), (-ms-high-contrast: active) and (min-width:${LARGE_DISPLAY_WIDTH}px)`

/**
 * Responsive media queries
 */
export const LARGER_DISPLAY_MEDIA_QUERY = `@media only screen and (max-width:${
    LARGER_DISPLAY_WIDTH - 1
}px)`
export const LARGE_DISPLAY_MEDIA_QUERY = `@media only screen and (max-width:${
    LARGE_DISPLAY_WIDTH - 1
}px)`
export const DEFAULT_MEDIA_QUERY = `@media only screen and (max-width:${
    DEFAULT_WIDTH - 1
}px)`
export const TABLET_MEDIA_QUERY = `@media only screen and (max-width:${
    TABLET_WIDTH - 1
}px)`
export const MOBILE_MEDIA_QUERY = `@media only screen and (max-width:${
    MOBILE_WIDTH - 1
}px)`

export const MIN_LARGER_DISPLAY_MEDIA_QUERY = `@media (min-width:${LARGER_DISPLAY_WIDTH}px)` // class prefix - lx
export const MIN_LARGE_DISPLAY_MEDIA_QUERY = `@media (min-width:${LARGE_DISPLAY_WIDTH}px)` // class prefix - lg
export const MIN_DEFAULT_MEDIA_QUERY = `@media (min-width:${DEFAULT_WIDTH}px)` // class prefix - df
export const MIN_TABLET_MEDIA_QUERY = `@media (min-width:${TABLET_WIDTH}px)` // class prefix - tb
export const MIN_MOBILE_MEDIA_QUERY = `@media (min-width:${MOBILE_WIDTH}px)` // class prefix - mb

export const MAIN_MEDIA_QUERY = DEFAULT_MEDIA_QUERY
export const MIN_MAIN_MEDIA_QUERY = MIN_DEFAULT_MEDIA_QUERY

export const shadow = '0 0 10px 5px rgba(0,0,0,.12)'
export const shadowPrimary = `1px 1px 3px ${primary}, -1px -1px 3px ${primary}`

export const borderDefault = 'solid 1px #D3D5D3'
export const borderRadiusSm = '8px'
export const borderRadiusDefault = '8px'

export const footerLight = '#0070f3'
export const footerDark = '#fba60f'

export default {
    primary,
    borderDefault,
    borderRadiusDefault,
    borderRadiusSm,
    shadow,
    shadowPrimary,
    MOBILE_MEDIA_QUERY,
    MIN_MOBILE_MEDIA_QUERY,
    transitionEasing
}