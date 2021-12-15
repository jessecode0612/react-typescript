import * as theme from './theme'

import { css } from '@emotion/react'

export default css`
  .flex-row,
  .flex-column,
  .flex-center,
  .flex-left-center,
  .flex-top-center,
  .flex-end,
  .flex-between-center {
    display: flex;
  }

  .flex-end {
    justify-content: flex-end;
  }

  .flex-row {
    flex-direction: row;
  }

  .flex-column {
    flex-direction: column;
  }

  .flex-center {
    justify-content: center;
    align-items: center;
  }

  .flex-left-center {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .flex-top-center {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .flex-between-center {
    justify-content: space-between;
    align-items: center;
  }

  .flex-center,
  .flex-top-center,
  .text-center {
    text-align: center;
  }

  .absolute-fill {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  html {
    height: 100%;
    min-width: 300px;
    box-sizing: border-box;
    overflow-y: auto;
    background-color: ${theme.mainBackground};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: #f9f9f9;
  }

  * {
    box-sizing: inherit;

    &[hidden] {
      display: none !important;
    }
  }

  body {
    font: 400 14px/1.45 Roboto, Georgia, 'Times New Roman', Times, serif;
    color: ${theme.text};
    letter-spacing: 0.03em;
    margin: 0;
  }

  header {
    position: fixed;
    width: 100%;
    z-index: 2;
  }

  body,
  #root {
    height: 100%;
    min-height: 100vh;
  }

  ::selection {
    color: ${theme.textDarkBg};
    background-color: ${theme.primary};
  }

  p {
    margin-top: 0;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  input {
    overflow: visible;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    color: inherit;
    font-family: Roboto, Georgia, 'Times New Roman', Times, serif;
    font-weight: 700;
  }

  h1 {
    font-size: 42px;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 32px;
    line-height: 1.45;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 24px;
    line-height: 1.45;
    margin-bottom: 15px;
  }

  h4 {
    font-size: 1em;
    line-height: 1.45;
    margin-bottom: 15px;
  }

  h5 {
    font-size: 1em;
    margin: 0;
  }

  h6 {
    font-size: 0.8rem;
    margin: 0;
  }

  .normal {
    font-weight: 400;
  }

  .text-sm {
    font-size: 14px;
  }

  .text-xs {
    font-size: 12px;
  }

  .text-bold {
    font-weight: 700;
  }

  .text-red {
    color: red;
  }

  text-green {
    color: green;
  }

  a {
    color: #555555;
    font-weight: 400;
    text-decoration: none;
    text-decoration-thickness: 0.1em;
    text-underline-offset: 2px;
    transition: color 0.1s ${theme.transitionEasing},
    text-decoration-color 0.1s ${theme.transitionEasing};

    .icon {
      fill: ${theme.link};

      transition: fill 0.1s ${theme.transitionEasing},
      stroke 0.1s ${theme.transitionEasing};
    }

    &:visited {
      color: ${theme.linkVisited};
      text-decoration-color: ${theme.linkVisited};

      .icon {
        fill: ${theme.linkVisited};
      }
    }

    &:hover {
      color: ${theme.linkHover};
      text-decoration-color: ${theme.linkHover};

      .icon {
        fill: ${theme.linkHover};
      }
    }

    &:active {
      color: ${theme.linkActive};
      text-decoration-color: ${theme.linkActive};

      .icon {
        fill: ${theme.linkActive};
      }
    }

    &.link-secondary {
      color: ${theme.linkSecondary};

      .icon {
        fill: ${theme.linkSecondary};
        transition: fill 0.1s ${theme.transitionEasing};
      }

      &:visited {
        color: ${theme.linkSecondaryVisited};

        .icon {
          fill: ${theme.linkSecondaryVisited};
        }
      }

      &:hover {
        color: ${theme.linkSecondaryHover};

        .icon {
          fill: ${theme.linkSecondaryHover};
        }
      }

      &:active {
        color: ${theme.linkSecondaryActive};

        .icon {
          fill: ${theme.linkSecondaryActive};
        }
      }
    }
  }

  .link-with-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
  }

  h1 a {
    color: ${theme.text};
  }

  img,
  form {
    margin: 0;
  }

  td,
  th,
  th:first-of-type,
  td:first-of-type,
  th:last-of-type,
  td:last-of-type {
    padding-left: 10px;
    padding-right: 10px;
  }

  figcaption {
    font-size: 0.9rem;
    font-style: italic;
    padding-left: 5px;
    padding-right: 5px;
    margin: 0 auto;
    text-align: center;
  }

  blockquote {
    border-left: 6px solid ${theme.primaryLight};
    font-size: 24px;
    margin: 0;
    padding: 5px 20px;

    * {
      margin: 0;
    }
  }

  .blue {
    color: ${theme.primary} !important;
  }

  .yellow {
    color: ${theme.yellow};
  }

  .select-label {
    background-color: white;
    color: ${theme.header};
  }

  :focus {
    outline: ${theme.primary} solid 1px;
  }

  .gatsby-resp-image-link {
    background-image: none;
  }

  // get gatsby images to show in IE11
  // see https://github.com/gatsbyjs/gatsby/issues/30053
  .object-fit-polyfill[style] {
    position: static !important;
  }

  h1 a,
  h2 a,
  h3 a,
  h4 a,
  h5 a {
    text-decoration: none;
    font-weight: 700;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    font-size: 16px;
    tab-size: 2;
  }

  pre[class*='language-'] {
    margin: 0 0 15px;
  }

  code:not(pre > code) {
    background-color: ${theme.codeBackground};
    border: 1px solid ${theme.mainBorder};
    border-radius: 7px;
    font-weight: 700;
    padding: 0 5px;
  }

  pre code {
    padding: 0;
  }

  ul {
    margin: 0 0 20px;
  }

  li *:last-child {
    margin-bottom: 0;
  }

  h3 code {
    font-size: 30px;
  }

  tr:nth-of-type(2n) {
    background-color: ${theme.codeBackground};
  }

  .btn {
    position: relative;
    height: 34px;
    line-height: 20px;
    font-size: 14px;
    font-weight: 400;
    padding: 1px 20px 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-shrink: 0;

    background-color: ${theme.buttonBackground};
    border: 1px solid ${theme.buttonBackground};
    border-radius: 24px;
    white-space: nowrap;
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    transition: background-color 0.1s ${theme.transitionEasing},
    border-color 0.1s ${theme.transitionEasing},
    color 0.1s ${theme.transitionEasing},
    opacity 0.2s ${theme.transitionEasing};

    .icon {
      fill: ${theme.textDarkBg};
      transition: fill 0.1s ${theme.transitionEasing};
    }

    &,
    &:visited {
      color: ${theme.textDarkBg};
    }

    &:hover:not([disabled]):not([aria-disabled='true']),
    &:active:not([disabled]):not([aria-disabled='true']) {
      background-color: ${theme.buttonBackgroundHover};
      border-color: ${theme.buttonBackgroundHover};
      color: ${theme.textDarkBg};

      .icon {
        fill: ${theme.textDarkBg};
      }
    }

    &:active:not([disabled]):not([aria-disabled='true']) {
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.8);
    }

    &[disabled],
    &[aria-disabled='true'],
    &.btn-submitting {
      opacity: 0.5;
      cursor: default;
      pointer-events: none;
    }

    &.btn-transparent {
      background-color: transparent;
      border-color: ${theme.primary};
      color: ${theme.primary};

      .icon {
        fill: ${theme.primary};
      }

      &:hover:not([disabled]):not([aria-disabled='true']),
      &:active:not([disabled]):not([aria-disabled='true']),
      &.btn-submitting {
        background-color: ${theme.primary};
        border-color: ${theme.primary};
        color: white;

        .icon {
          fill: white;
        }
      }
    }

    &.btn-secondary {
      background-color: white;
      border-color: ${theme.primary};
      color: ${theme.primary};

      .icon {
        fill: ${theme.primary};
        stroke: ${theme.primary};
      }

      &:hover:not([disabled]):not([aria-disabled='true']),
      &:active:not([disabled]):not([aria-disabled='true']),
      &.btn-submitting {
        background-color: ${theme.primary};
        border-color: ${theme.primary};
        color: white;

        .icon {
          fill: white;
        }
      }
    }

    &.btn-secondary.btn-transparent {
      background-color: transparent;
      border-color: ${theme.secondary};
      color: ${theme.secondary};

      .icon {
        fill: ${theme.secondary};
      }

      &:hover:not([disabled]):not([aria-disabled='true']),
      &:active:not([disabled]):not([aria-disabled='true']),
      &.btn-submitting {
        background-color: ${theme.linkSecondaryHover};
        border-color: ${theme.linkSecondaryHover};
        color: ${theme.text};

        .icon {
          fill: ${theme.text};
        }
      }
    }

    &.btn-large {
      height: 44px;
      font-size: 1em;
      padding-top: 0;
    }

    &.btn-wide {
      ${theme.MIN_DEFAULT_MEDIA_QUERY} {
        min-width: 155px;
      }
    }

    &.btn-full {
      width: 100%;
    }

    &.btn-link {
      background: none;
      border: none;
      border-radius: 0;
      color: ${theme.primary};
      padding: 5px 10px;
      height: auto;

      &:hover:not([disabled]):not([aria-disabled='true']),
      &:active:not([disabled]):not([aria-disabled='true']),
      &.btn-submitting {
        background: none;
        border: none;
        color: ${theme.primaryDark};
      }
    }
  }

  .input-wrap {
    width: 100%;
    flex-direction: column;
    display: grid;
    grid-template-columns: 100%;

    &:last-child {
      margin-bottom: 0;
    }

    label {
      text-transform: uppercase;
      margin: 0 0 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  .input {
    width: 100%;
    border: 1px solid ${theme.mainBorder};
    border-radius: 4px;
    background-color: white;
    padding-left: 10px;
    padding-right: 20px;
  }

  input[readonly]:focus {
    outline: 0;
  }

  .input,
  .input-value {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .warning {
    color: ${theme.yellow};

    &.input {
      border-color: ${theme.yellow};
    }
  }

  .error {
    color: ${theme.error};

    &.input {
      border-color: ${theme.error};
    }
  }

  .label {
    font-size: 0.9rem;
    font-weight: 700;
    flex-shrink: 0;

    ${theme.MIN_DEFAULT_MEDIA_QUERY} {
      font-size: 1rem;
    }
  }

  .dashed-border,
  .dashed-border-top,
  .dashed-border-bottom {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
    }
  }

  .dashed-border::before {
    top: 0;
    bottom: 0;
    background: ${theme.dashedBorder} center center no-repeat;
  }

  .dashed-border-top::before,
  .dashed-border-bottom::before {
    height: 2px;
    background: ${theme.dashedBorderHorizontal} top center no-repeat;
  }

  .dashed-border-top::before {
    top: 0;
  }

  .dashed-border-bottom::before {
    bottom: 0;
    background-position: bottom center;
  }

  .columns {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .columns-mobile {
    display: flex;
    flex-direction: row;
    width: 100%;

    .column-half {
      width: calc(50% - 12.5px);

      &:first-of-type {
        margin-right: 25px;
      }
    }
  }

  html.dark-mode {
    background-color: ${theme.mainBackgroundDark};

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a,
    a:visited,
    h1 a {
      color: ${theme.textDarkBg};
    }

    a {
      .icon {
        fill: ${theme.textDarkBg};
      }

      &:hover {
        color: ${theme.linkDarkHover};

        .icon {
          fill: ${theme.linkDarkHover};
        }
      }

      &:active {
        color: ${theme.linkDarkActive};

        .icon {
          fill: ${theme.linkDarkActive};
        }
      }
    }

    a.content-link,
    .privacy-text a {
      color: ${theme.linkDark};
      text-decoration-color: ${theme.linkDark};

      .icon {
        fill: ${theme.linkDark};
      }

      &:hover {
        color: ${theme.linkDarkHover};
        text-decoration-color: ${theme.linkDarkHover};

        .icon {
          fill: ${theme.linkDarkHover};
        }
      }

      &:active {
        color: ${theme.linkDarkActive};
        text-decoration-color: ${theme.linkDarkActive};

        .icon {
          fill: ${theme.linkDarkActive};
        }
      }
    }

    .btn {
      background-color: ${theme.buttonBackgroundDark};
      border-color: ${theme.buttonBackgroundDark};

      &,
      &:visited {
        color: ${theme.text};
      }

      .icon {
        fill: ${theme.text};
      }

      &:hover:not([disabled]),
      &:active:not([disabled]),
      &.btn-submitting {
        background-color: ${theme.buttonBackgroundDarkHover};
        border-color: ${theme.buttonBackgroundDarkHover};
        color: ${theme.textDarkBg};
      }

      &.btn-transparent {
        background-color: transparent;
        border-color: ${theme.buttonBackgroundDark};
        color: ${theme.buttonBackgroundDark};

        .icon {
          fill: ${theme.buttonBackgroundDark};
        }

        &:hover:not([disabled]),
        &:active:not([disabled]),
        &.btn-submitting {
          background-color: ${theme.buttonBackgroundDark};
          border-color: ${theme.buttonBackgroundDark};
          color: ${theme.text};

          .icon {
            fill: ${theme.text};
          }
        }
      }
    }

    .select-label {
      background-color: ${theme.stickyNavBackgroundDark};
      color: ${theme.textDarkBg};
    }

    .dashed-border-top::before,
    .dashed-border-bottom::before {
      opacity: 0.5;
    }
  }

  ${theme.MIN_DEFAULT_MEDIA_QUERY} {
    h1 {
      font-size: 54px;
    }

    h2 {
      font-size: 42px;
    }

    h3 {
      font-size: 32px;
    }

    h4,
    .title {
      font-size: 24px;
    }

    .columns {
      flex-direction: row;

      .column-half {
        width: calc(50% - 12.5px);

        &:first-of-type {
          margin-right: 25px;
        }
      }

      .column-third {
        width: calc(33% - ${40 / 3}px);

        &:nth-last-of-type(n + 2) {
          margin-right: 20px;
        }
      }
    }

    .input-wrap {
      flex-direction: row;
      grid-template-columns: 180px 1fr;

      label {
        justify-content: flex-end;
        text-align: right;
        margin: 0 20px 0 0;
      }
    }
  }

  ${theme.ieBreakpoint} {
    .ie-fix,
    .title,
    p,
    h1,
    h2,
    h3,
    h4 {
      width: 100%;
    }

    .input-wrap label {
      width: 180px;
    }
  }

  // Layouts
  .container {
    padding: 12px;
    margin: auto;
    width: 96%;

    ${theme.MIN_DEFAULT_MEDIA_QUERY} {
      max-width: ${theme.DEFAULT_WIDTH - 88}px;
    }

    ${theme.MIN_LARGE_DISPLAY_MEDIA_QUERY} {
      max-width: ${theme.DEFAULT_WIDTH}px;
    }

    ${theme.MIN_LARGER_DISPLAY_MEDIA_QUERY} {
      max-width: ${theme.LARGE_DISPLAY_WIDTH}px;
    }
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -12px;
    margin-right: -12px;
  }

  .col,
  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-10,
  .col-11,
  .col-12,
  .col-auto,
  .col-lg,
  .col-lg-1,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12,
  .col-lg-auto,
  .col-df,
  .col-df-1,
  .col-df-2,
  .col-df-3,
  .col-df-4,
  .col-df-5,
  .col-df-6,
  .col-df-7,
  .col-df-8,
  .col-df-9,
  .col-df-10,
  .col-df-11,
  .col-df-12,
  .col-df-auto,
  .col-mb,
  .col-mb-1,
  .col-mb-2,
  .col-mb-3,
  .col-mb-4,
  .col-mb-5,
  .col-mb-6,
  .col-mb-7,
  .col-mb-8,
  .col-mb-9,
  .col-mb-10,
  .col-mb-11,
  .col-mb-12,
  .col-mb-auto,
  .col-lx,
  .col-lx-1,
  .col-lx-2,
  .col-lx-3,
  .col-lx-4,
  .col-lx-5,
  .col-lx-6,
  .col-lx-7,
  .col-lx-8,
  .col-lx-9,
  .col-lx-10,
  .col-lx-11,
  .col-lx-12,
  .col-lx-auto {
    width: 100%;
    padding: 12px;
  }

  .col-3 {
    width: 25%;
  }

  .col-4 {
    width: 33.33333%;
  }

  .col-5 {
    width: 41.66666%;
  }

  .col-6 {
    width: 50%;
  }

  .col-7 {
    width: 58.33333%;
  }

  .col-8 {
    width: 66.66666%;
  }

  ${theme.MIN_TABLET_MEDIA_QUERY} {
    .col-tb-3 {
      width: 25%;
    }

    .col-tb-4 {
      width: 33.33333%;
    }

    .col-tb-5 {
      width: 41.66666%;
    }

    .col-tb-6 {
      width: 50%;
    }

    .col-tb-7 {
      width: 58.33333%;
    }

    .col-tb-8 {
      width: 66.66666%;
    }
  }

  ${theme.MIN_DEFAULT_MEDIA_QUERY} {
    .col-df-3 {
      width: 25%;
    }

    .col-df-4 {
      width: 33.33333%;
    }

    .col-df-5 {
      width: 41.66666%;
    }

    .col-df-6 {
      width: 50%;
    }

    .col-df-7 {
      width: 58.33333%;
    }

    .col-df-8 {
      width: 66.66666%;
    }
  }

  ${theme.MIN_LARGE_DISPLAY_MEDIA_QUERY} {
    .col-lg-3 {
      width: 25%;
    }

    .col-lg-4 {
      width: 33.33333%;
    }

    .col-lg-5 {
      width: 41.66666%;
    }

    .col-lg-6 {
      width: 50%;
    }

    .col-lg-7 {
      width: 58.33333%;
    }

    .col-lg-8 {
      width: 66.66666%;
    }
  }

  ${theme.MIN_LARGER_DISPLAY_MEDIA_QUERY} {
    .col-lx-3 {
      width: 25%;
    }

    .col-lx-4 {
      width: 33.33333%;
    }

    .col-lx-5 {
      width: 41.66666%;
    }

    .col-lx-6 {
      width: 50%;
    }

    .col-lx-7 {
      width: 58.33333%;
    }

    .col-lx-8 {
      width: 66.66666%;
    }
  }

  .flex-column-reverse {
    flex-direction: column-reverse !important;
  }

  .w-100 {
    width: 100%;
  }

  .h-100 {
    height: 100%;
  }

  .bg-white {
    background-color: white;
  }

  .card {
    box-shadow: 0 0 10px 2px #00000012;
    border-radius: 4px;
    overflow: hidden;
  }

  .badge {
    font-size: 12px;
    padding: 2px 4px;
    margin: 1px;
    border-radius: 3px;
    font-weight: 300;
    background-color: gray;
    color: white;
  }

  .badge-green {
    background-color: rgba(56, 152, 56, 0.85);
  }

  // Margins
  .my-2 {
    margin-top: ${theme.spacing[2]}px;
    margin-bottom: ${theme.spacing[2]}px;
  }

  .my-3 {
    margin-top: ${theme.spacing[3]}px;
    margin-bottom: ${theme.spacing[3]}px;
  }

  .mt-1 {
    margin-top: ${theme.spacing[1]}px;
  }

  .mt-2 {
    margin-top: ${theme.spacing[2]}px;
  }

  .ml-1 {
    margin-left: ${theme.spacing[1]}px;
  }

  .ml-2 {
    margin-left: ${theme.spacing[2]}px;
  }

  .mb-2 {
    margin-bottom: ${theme.spacing[2]}px;
  }

  // Paddings
  .p-0 {
    padding: 0 !important;
  }
  .p-1 {
    padding: ${theme.spacing[1]}px;
  }
  .p-2 {
    padding: ${theme.spacing[2]}px;
  }
  
  .py-1 {
    padding-top: ${theme.spacing[1]}px;
    padding-bottom: ${theme.spacing[1]}px;
  }

  .py-2 {
    padding-top: ${theme.spacing[2]}px;
    padding-bottom: ${theme.spacing[2]}px;
  }

  .pl-1 {
    padding-bottom: ${theme.spacing[1]}px;
  }

  .pb-2 {
    padding-bottom: ${theme.spacing[2]}px;
  }
  
  .pr-2 {
    padding-right: ${theme.spacing[2]}px;
  }
`
