import React from 'react';
import InternalServerError from '../../src/pages/500';
import Layout from '../../src/components/Layout';

const story = { title: 'Pages/500', component: InternalServerError };

export const Default = () => (
  <Layout>
    <InternalServerError />
  </Layout>
);

export default story;
