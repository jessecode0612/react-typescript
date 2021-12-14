/** @jsx jsx */
import {css, jsx} from '@emotion/react'
import theme from '../../styles/theme'

interface Props {
    isDark?: boolean
}

export default function Footer({isDark = false}: Props) {
    return (
        <footer css={styles.footer}>
            <div className={`footer-container ${isDark ? 'dark' : ''}`}>
                <span className="text-sm">Copyright © {new Date().getUTCFullYear()} BP</span>
                <div className="footer-link-wrapper">
                    <a href="#home">
                        <span className="footer-link text-bold">Home</span>
                    </a>
                    <a href="#projects">
                        <span className="footer-link text-bold">Projects</span>
                    </a>
                    <a href="#skills">
                        <span className="footer-link text-bold">Skills</span>
                    </a>
                    <a href="#contact-me">
                        <span className="footer-link text-bold">Contact Me</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}

const styles = {
    footer: css`
      margin-top: auto;
      border-top: ${theme.borderDefault};
      background-color: white;
      position: relative;
      z-index: 10002;

      .footer-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 16px 30px;

        ${theme.DEFAULT_MEDIA_QUERY} {
          flex-direction: column;
          justify-content: center;

          .footer-link-wrapper {
            margin: 12px 0;
          }
        }

        .footer-link-wrapper {
          display: flex;
          align-items: center;
          gap: 16px;

          .footer-link {
            cursor: pointer;
            color: ${theme.footerLight};
          }

          ${theme.MOBILE_MEDIA_QUERY} {
            flex-direction: column;
            justify-content: center;
          }
        }

        &.dark {
          span {
            color: ${theme.textDarkBg};
          }

          .footer-link-wrapper {
            .footer-link {
              color: ${theme.footerDark};
            }
          }
        }
      }
    `
}
