import React from 'react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { GlobalStyle } from '../src/pages/_app';
import Layout from '../src/components/Layout';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <MemoryRouterProvider>
      <GlobalStyle />
      <Story />
    </MemoryRouterProvider>
  ),
];
