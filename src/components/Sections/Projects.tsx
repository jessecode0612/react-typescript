/** @jsx jsx */
import {css, jsx} from '@emotion/react'
import theme from '../../styles/theme'

const projects = [
    {
        name: 'Faevva Pay',
        image: require("../../assets/projects/tcn.png"),
        link: 'http://tcn.webbb.site/',
        tags: ['React', 'ThreeJS', 'Node',"MongoDB"],
        description:''
    }
]

export default function Projects() {

    return (
        <div css={styles} className="container">
            <h3>A few of my projects</h3>
            <div className="row" >
                {
                    projects.map((project, index) => (
                        <div className="col-lg-4" key={index.toString()}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <div key={index.toString()} className="project-item">
                                    <img src={project.image} alt={project.name}/>
                                    <h5>{project.name}</h5>
                                    <div>
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
  
  .project-item{
    width: 100%;
    background-color: white;
    border-radius: ${theme.borderRadiusDefault};
    padding: 10px;
    
    img{
      width: 100%;
      object-fit: contain;
    }
  }
`