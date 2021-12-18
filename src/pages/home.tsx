/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import DefaultLayout from '../layouts/DefaultLayout';
import ContactForm from '../components/Sections/ContactForm';
import Hero from '../components/Sections/Hero';
import Projects from '../components/Sections/Projects';
import Skills from '../components/Sections/Skills';
import AboutMe from '../components/Sections/AboutMe';
import Logos from '../components/Sections/Logos';

export const HomePage = () => {
  return (
    <DefaultLayout>
      <div css={styles}>
        <Hero />
        <Logos />
        <Projects />
        <AboutMe />
        <Skills />
        <ContactForm />
      </div>
    </DefaultLayout>
  );
};

export default HomePage;

const styles = css`
  .hero {
    width: 100%;
    position: relative;
  }
`;
