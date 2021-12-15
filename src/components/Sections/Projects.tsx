/** @jsx jsx */
import {css, jsx} from '@emotion/react'
import theme from '../../styles/theme'

const projects = [
    {
        category: 'web',
        name: 'Spokestack',
        image: require("../../assets/projects/spokestack.png"),
        website: 'https://spokestack.io/',
        tags: ['NextJS', 'Node',"Websocket", 'SASS'],
        description:'Spokestack is a powerful platform of open source libraries and robust services to make your software fully voice-enabled. ' +
            'Get started with open-source libraries that add speech recognition, text-to-speech, and language understanding to your software with one simple cross-platform API. ' +
            'We offer SDKs for different platforms that let you manage voice interactions inside your software.'
    },
    {
        category: 'web',
        name: 'Faevva Pay',
        image: require("../../assets/projects/tcn.png"),
        website: 'http://tcn.webbb.site/',
        tags: ['React', 'ThreeJS', 'Node',"MongoDB"],
        description:'Faevva Pay is an example website built with MERN stack. TreeJS for front design and simple login & register function and has dashboard.'
    },
    {
        category: 'web',
        name: 'Wasil-iq',
        image: require("../../assets/projects/wasil.png"),
        website: 'https://wasil-iq.com/ON/',
        tags: ['PHP', 'MySQL','Javascript', 'Paypal','Stripe'],
        description: 'Wasil is the first and the biggest fully automated shipping company in Iraq. They at Wasil aim to bring Iraq a step closer to the modern world by providing exceptional shipping services to our lovely costumers.'
    },
    {
        category: 'mobile',
        name: 'Havvi',
        image: require("../../assets/projects/havvi.png"),
        website: 'https://havvi.app',
        tags: ['Expo', 'Firestore','Firebase function', 'FCM','NodeJS','Strip'],
        apple: 'https://apps.apple.com/tt/app/havvi-fitness-home-workouts/id1577812599',
        description: 'Havvi brings you the best home fitness content from 100+ of the world’s top creators, totaling over 16,000 workouts and growing daily.'
    },
    {
        category: 'mobile',
        name: 'Chill Car Service',
        image: require("../../assets/projects/chill.png"),
        website: 'https://havvi.app',
        tags: ['React Native', 'Firestore','Firebase function','FCM' ,'Tap', 'NodeJS'],
        description: 'CHILL is an online car wash platform (Interior, exterior & Disinfectant) with extended features, The only online car wash market place that connects to car wash company and customer with instant booking at the BEST price'
    },
    {
        category: 'mobile, web',
        name: 'Cloudpin',
        image: require("../../assets/projects/cloudpin.png"),
        website: 'https://cloudpin.it/',
        apple: 'https://apps.apple.com/us/app/cloudpin/id1516110996',
        tags: ['Expo', 'Firestore','Firebase function','FCM' ,'Tap', 'GatsbyJS'],
        description: 'Cloudpin lets users broadcast content to anyone in the world by simply sharing an easy to remember pin code.'
    }
]

export default function Projects() {

    return (
        <div css={styles} className="container" id="projects">
            <h3>A few of my projects</h3>
            <div className="row" >
                {
                    projects.map((project, index) => (
                        <div className="col-lg-4" key={index.toString()}>
                            <a href={project.website} target="_blank" rel="noopener noreferrer">
                                <div key={index.toString()} className="project-item">
                                    <img src={project.image} alt={project.name}/>
                                    <h5>{project.name}</h5>
                                    <div className="description">
                                        {project.description}
                                    </div>
                                    <div className={'flex-wrap'}>
                                        {
                                            project.tags.map((tag, index) => {
                                                return (
                                                    <span className="badge badge-green" key={index.toString()}>
                                             {tag}
                                        </span>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const styles = css`
  width: 96%;
  margin: 30px auto 0 auto;
  
  a{
    display: block;
    height: 100%;
  }
  
  .project-item{
    width: 100%;
    background-color: white;
    border-radius: ${theme.borderRadiusDefault};
    padding: 10px;
    height: inherit;
    
    img{
      width: 100%;
      object-fit: contain;
    }
    .description{
      margin: 10px 0;
    }
  }
`