import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import {Headline, Title, Button, Body} from "@healform/liquid";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Title size={"three"} as={"h2"}>{siteConfig.title}</Title>
          <Headline>{siteConfig.tagline}</Headline>
          <Body>
            <Link
              to="/docs/intro">
              <Button>
                Hilfe erhalten
              </Button>
            </Link>
          </Body>
        </div>
      </header>
    </>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`test`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
