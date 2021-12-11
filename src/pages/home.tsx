/** @jsx jsx */
import {css, jsx} from '@emotion/react'
import DefaultLayout from "../layouts/DefaultLayout"
import ContactForm from '../components/Sections/ContactForm'
import Hero from '../components/Sections/Hero'

export const HomePage = () => {

    return (
        <DefaultLayout>
            <div css={styles}>
                <Hero />
                <ContactForm />
            </div>
        </DefaultLayout>
    )
}

export default HomePage

const styles = css`
  .hero {
    width: 100%;
    position: relative;
  }
`