/** @jsx jsx */
import {css, jsx} from '@emotion/react'
import {HTMLAttributes} from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
    fullWidth?: boolean
}

export default function Section
({
     fullWidth = false,
     ...rest
 }: Props) {


    let className = ''

    if (!fullWidth) {
        className += "container"
    }

    return (
        <div css={styles} className={className} {...rest}>

        </div>
    )
}

const styles = css`
  width: 96%;
  margin: auto;
`