/** @jsx jsx */
import {css, jsx} from '@emotion/react'
import Banner from '../../components/Sections/Banner'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter';
import useFileLoader from '../../utils/hooks/useFileContent'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const DocsPage = () => {

    const content = useFileLoader({url: '/README.md'})

    return (
        <div css={styles}>
            <Banner />
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
    )
}

export default DocsPage

const styles = css`
  .hero {
    width: 100%;
    position: relative;
  }
`