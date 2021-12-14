/** @jsx jsx */
import {css, jsx} from '@emotion/react'

export default function AboutMe() {


    return (
        <div css={styles} className="container" >
            <h3>About me</h3>
            <p>
                I am specialized in Web and Mobile app development. I am highly specialized in Web and Mobile app development. I have solid knowledge in these areas and also a deep understanding of the technical side of things.
                I have the necessary drive, motivation and energy to see a project through to its completion.
                I pride myself on completing projects on time
            </p>
            <p>
                Detail-oriented, adaptable and hard-working with 5+ years of experiences in developing mobile & web applications with contributing to lots of personal businesses and companies so far.
                I really enjoy working on cutting-edge projects and developing enabling new technologies in the hope that these will one day translate back to the real world and have a direct impact on our lives.
                I also enjoy being surrounded by brilliant people that share the vision of “technology for good” and I am truly humbled by their support. Meanwhile,
                I am excited by the ever-growing challenges I am faced with as my career unfolds, and keen to taking them on.
            </p>
        </div>
    )
}

const styles = css`
  width: 96%;
  margin: auto;
`