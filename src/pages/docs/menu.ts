import {ListItemType} from './index'

export const menu: ListItemType[] = [
    {title: 'Overview', url: '/docs/README.md'},
    {
        title: 'System',
        list: [
            {title: 'Linux', url: '/docs/system/linux.md'},
            {title: 'Nginx', url: '/docs/system/nginx.md'}
        ]
    },
    {
        title: 'Trouble Shootings',
        list: [
            {title: 'Git', url: '/docs/troubleshootings/git.md'}
        ]
    }
]