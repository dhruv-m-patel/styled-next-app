import React from 'react';
import Layout from '../../src/components/Layout';

const story = {
  title: 'Components/Layout',
  component: Layout,
};

export const Default = () => (
  <Layout>
    <h1>This title is rendered inside Layout</h1>
    <p>This paragraph also is rendered inside same Layout</p>
  </Layout>
);

export default story;
