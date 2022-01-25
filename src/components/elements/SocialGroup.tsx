/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import LinkedInIcon from "../Icons/LinkedInIcon";
import GithubIcon from "../Icons/GithubIcon";
import SkypeIcon from "../Icons/SkypeIcon";
// import TwitterIcon from "../Icons/TwitterIcon";

const linkedin = "https://www.linkedin.com/in/jingzhe-nan-0048521a4/";
const github = "https://github.com/unigisper8";
// const twitter = "https://twitter.com/PaudelBhusan";
const skype = "https://join.skype.com/invite/CcglIhdmJgE6";

export default function SocialGroup() {
  return (
    <div css={styles}>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" >
        <LinkedInIcon />
      </a>
      <a href={github} target="_blank" rel="noopener noreferrer" >
        <GithubIcon />
      </a>
      {/*<a href={twitter} target="_blank" rel="noopener noreferrer" >*/}
      {/*  <TwitterIcon />*/}
      {/*</a>*/}
      <a href={skype} target="_blank" rel="noopener noreferrer">
        <SkypeIcon />
      </a>
    </div>
  );
}

const styles = css`
  display: flex;
  align-items: center;
  flex-direction: row;

  a {
    display: flex;
    width: 24px;
    height: 24px;
    background-color: white;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    margin-right: 10px;
  }
`;
