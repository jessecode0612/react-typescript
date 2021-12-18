/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import theme from '../../styles/theme';
import projects from '../../data/projects';

export default function Projects() {
  return (
    <div css={styles} className="container" id="projects">
      <h3>A few of my projects</h3>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-lg-4" key={index.toString()}>
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              <div key={index.toString()} className="project-item">
                <img src={project.image} alt={project.name} />
                <h5>{project.name}</h5>
                <div className="description">{project.description}</div>
                <div className={'flex-wrap'}>
                  {project.tags.map((tag, index) => {
                    return (
                      <span className="badge badge-green" key={index.toString()}>
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = css`
  width: 96%;
  margin: 30px auto 0 auto;

  a {
    display: block;
    height: 100%;
  }

  .project-item {
    width: 100%;
    background-color: white;
    border-radius: ${theme.styles.border};
    padding: 10px;
    height: inherit;

    img {
      width: 100%;
      object-fit: contain;
    }

    .description {
      margin: 10px 0;
    }
  }
`;
