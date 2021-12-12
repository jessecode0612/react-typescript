/** @jsx jsx */
import {css, jsx} from '@emotion/react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter';
import useFileLoader from '../../utils/hooks/useFileContent'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import theme from '../../styles/theme'
import Logo from '../../components/Logo'

export default function DocsPage(){

    const content = useFileLoader({url: '/README.md'})

    return (
        <div css={styles}>
            <div className="side-bar">
                <div className="flex-center my-2">
                    <Logo />
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <ReactMarkdown
                        children={content}
                        components={{
                            code({node, inline, className, children, ...props}) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        children={String(children).replace(/\n$/, '')}
                                        language={match[1]}
                                        style={darcula}
                                    />
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                )
                            }
                        }}
                        remarkPlugins={[remarkGfm]}
                    />
                </div>
            </div>
        </div>
    )
}

const styles = css`
  .side-bar{
    position: fixed;
    left: 0;
    width: 320px;
    background-color: white;
    height: 100vh;
    top: 0;
    border-right: ${theme.borderDefault};
  }
  .content {
    width: 100%;
    padding-left: 320px;
  }
`