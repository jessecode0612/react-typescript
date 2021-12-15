import {ListItemType} from './index'

export const menu: ListItemType[] = [
    {title: 'Overview', url: '/docs/README.md'},
    {
        title: 'Languages',
        list: [
            {title: 'PHP'},
            {title: 'HTML'},
            {title: 'Javascript'},
            {title: 'CSS/SCSS'},
            {title: 'Python'},
        ]
    },
    {
        title:'Frameworks',
        list: [
            {
                title: 'Server Side',
                list: [
                    {title: 'Laravel',url:'/docs/frameworks/laravel.md'},
                    {title: 'Node/Express',url:'/docs/frameworks/node.md'}
                ]
            },
            {
                title: 'Client Side',
                list:[
                    {title: 'ReactJS'},
                    {title: 'VueJS'},
                ]
            },
            {
                title: 'Mobile Application',
                list: [
                    {title: 'Android'},
                    {title: 'Swift'},
                    {title: 'React Native',url:'/docs/frameworks/rn.md'},
                    {title: 'Flutter'},
                ]
            },
            {
                title: 'Hybrid',
                list: [
                    {title: 'WordPress'}
                ]
            }
        ]
    },
    {
        title: 'Database',
        list: [
            {title: 'MySQL'},
            {title: 'MongoDB'},
            {title: 'PostgreSQL', url: '/docs/database/PostgreSQL.md'},
            {title: 'Firebase/Firestore', url: '/docs/database/fb.md'},
            {title: 'MSSQL'},
        ]
    },
    {
        title: 'Cloud Services',
        list: [
            {title: 'Google',url: '/docs/services/google.md'},
            {title: 'AWS',url: '/docs/services/aws.md'},
            {title: 'Azure',url: '/docs/services/azure.md'}
        ]
    },
    {
        title: 'System',
        list: [
            {title: 'Linux', url: '/docs/system/linux.md'},
            {title: 'Nginx', url: '/docs/system/nginx.md'}
        ]
    },
    {
      title:'Tools',
      list: [
          {title: 'Composer'},
          {title: 'Version Control'},
          {title: 'Prettier'},
          {title: 'Npm'},
          {title: 'Webpack'},
      ]
    },
    {
        title: 'Trouble Shootings',
        list: [
            {title: 'Git', url: '/docs/troubleshootings/git.md'}
        ]
    },
    {
        title: 'Blogs', url:'/docs/blogs.md'
    },
    {
        title: 'Libraries', url:'/docs/libraries.md'
    },
    {
        title: 'Software Terms', url:'/docs/concepts.md'
    }
]