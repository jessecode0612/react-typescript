/** @jsx jsx */
import {css, jsx} from '@emotion/react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter'
import useFileLoader from '../../utils/hooks/useFileContent'
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import theme from '../../styles/theme'
import Logo from '../../components/Logo'
import DefaultLayout from '../../layouts/DefaultLayout'
import {menu} from './menu'
import {ArrowNextIcon} from '../../components/Icons'
import {useState} from 'react'

export interface ListItemType {
    title: string
    url?: string
    list?: ListItemType[]
}

function ListItem(
    {
        item,
        handleMenuItemClick
    }: {
        item: ListItemType
        handleMenuItemClick: (url: string) => void
    }) {

    const handleItemClick = () => {
        if (item.url) {
            handleMenuItemClick(item.url)
        }
    }

    return (
        <div className="list-item">
            <div className="menu-item" onClick={handleItemClick}>
                {
                    item.list ?
                        <strong>{item.title}</strong> :
                        <span>{item.title}</span>
                }
                {item.list && <ArrowNextIcon/>}
            </div>
            <div className="menu-list">
                {
                    item.list?.map((t, i) => (
                        <ListItem item={t} key={i.toString()} handleMenuItemClick={handleMenuItemClick}/>
                    ))
                }
            </div>
        </div>
    )
}

export default function DocsPage() {

    const [url, setUrl] = useState<string>('/docs/README.md')
    const content = useFileLoader({url})

    const handleMenuItemClick = (url: string) => {
        setUrl(url)
    }

    return (
        <DefaultLayout header={false}>
            <div css={styles}>
                <div className="side-bar">
                    <div className="flex-center my-2">
                        <Logo/>
                    </div>
                    <div className="py-2 pr-2">
                        {
                            menu.map((menuItem, index) => (
                                <ListItem
                                    key={index.toString()}
                                    item={menuItem}
                                    handleMenuItemClick={handleMenuItemClick}
                                />
                            ))
                        }
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
        </DefaultLayout>
    )
}

const styles = css`
  .side-bar {
    position: fixed;
    left: 0;
    width: 320px;
    background-color: white;
    height: 100vh;
    top: 18px;
    border-right: ${theme.borderDefault};
    overflow-y: auto;
    padding-bottom: 200px;

    .list-item {
      width: 100%;

      .menu-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 24px;
        padding-left: 20px;

        &:hover {
          color: ${theme.primary};
          cursor: pointer;

          .icon {
            fill: ${theme.primary};
          }
        }

        .icon {
          width: 14px;
          height: 14px;
        }
      }

      .menu-list {
        padding-left: 20px;
      }
    }
  }

  .content {
    width: 100%;
    padding-left: 320px;
  }
`