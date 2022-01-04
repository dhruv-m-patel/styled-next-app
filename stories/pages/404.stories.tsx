import React from 'react';
import NotFound from '../../src/pages/404';
import Layout from '../../src/components/Layout';

const story = { title: 'Pages/404', component: NotFound };

export const Default = () => (
  <Layout>
    <NotFound />
  </Layout>
);

export default story;
