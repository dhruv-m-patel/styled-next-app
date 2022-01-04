import React from 'react';
import About from '../../src/pages/about';
import Layout from '../../src/components/Layout';

const story = { title: 'Pages/About', component: About };

export const Default = () => (
  <Layout>
    <About />
  </Layout>
);

export default story;
