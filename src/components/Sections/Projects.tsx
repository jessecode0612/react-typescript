/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import theme from '../../styles/theme';
import projects from '../../data/projects';
import { RatioView } from "../elements";
import WebIcon from "../Icons/WebIcon";
import Tooltip from "../Tooltip";
import GoogleIcon from "../Icons/GoogleIcon";
import AppleIcon from "../Icons/AppleIcon";

export default function Projects() {

  return (
    <div css={styles} className="container" id="projects">
      <h3>A few of my projects</h3>
      <div className="project-wrapper">
        {projects.map((project, index) => (
          <div key={index.toString()} className="project-item">
            <RatioView ratio={1/2}>
              <img src={project.image} alt={project.name} />
            </RatioView>
            <div className="title">
              <h5>{project.title}</h5>
            </div>
            <div className="links">
              <h6 style={{paddingRight: 10}}>{project.subtitle}</h6>
              {
                project.website &&
                <a href={project.website} target="_blank" rel="noopener noreferrer">
                  <Tooltip content="visit website">
                    <WebIcon />
                  </Tooltip>
                </a>
              }
              {
                project.apple &&
                <a href={project.apple} target="_blank" rel="noopener noreferrer">
                  <Tooltip content="play store">
                    <AppleIcon />
                  </Tooltip>
                </a>
              }
              {
                project.google &&
                <a href={project.google} target="_blank" rel="noopener noreferrer">
                  <GoogleIcon />
                </a>
              }
              {
                project.detail &&
                <a href={project.detail} target="_blank" rel="noopener noreferrer">
                  Details
                </a>
              }
            </div>
            <div className="description">{project.description}</div>
            <div className={'flex-wrap'} style={{marginTop: 'auto'}}>
              {project.tags.map((tag: string, index: number) => {
                return (
                  <span className="badge badge-green" key={index.toString()}>
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = css`
  width: 96%;
  margin: 30px auto 0 auto;
  
  .project-wrapper{
    display: grid;
    grid-gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  }
  
  .project-item {
    width: 100%;
    background-color: white;
    border-radius: ${theme.styles.border};
    padding: 10px;
    height: inherit;
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      object-fit: contain;
      border-radius: 4px;
    }
    
    .title,
    .links{
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    
    .links{
      a{
        font-size: 12px;
        border-radius: 4px;
        margin-right: 10px;
        text-decoration: underline;
      }
    }

    .description {
      margin: 10px 0;
    }
  }
`;
