/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { CSSProperties, FunctionComponent, HTMLAttributes } from 'react'
import theme from '../styles/theme'

interface Props extends HTMLAttributes<HTMLElement> {
  color?: string
  height?: number | string
  gradient?: boolean
  width?: number | string
  max: number
  value: number
  gradientEndColor?: string
}

const Progress: FunctionComponent<Props> = ({
  height = 5,
  width = '100%',
  color = theme.colors.primary,
  max = 100,
  value = 0,
  gradient = true,
  gradientEndColor = '#A36DF6'
}) => {
  const ContainerStyle: CSSProperties = {
    height,
    width,
    backgroundColor: '#E6E9E9'
  }

  const contentStyle: CSSProperties = {
    height: '100%',
    backgroundColor: color
  }

  if (gradient) {
    contentStyle.backgroundImage = `linear-gradient(to right, ${color}, ${gradientEndColor})`
  }

  const contentCss = css`
    width: ${(value / max) * 100}%;
    transition: width 0.5s ease-out;
  `

  return (
    <div style={ContainerStyle}>
      <div css={contentCss} style={contentStyle} />
    </div>
  )
}

export default Progress
