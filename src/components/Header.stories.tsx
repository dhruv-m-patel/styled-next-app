import React from 'react';
import Header, { HeaderProps } from './Header';

const story = {
  title: 'Components/Header',
  component: Header,
};

const Template = (args: HeaderProps) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'I am a title rendered by Header',
};

export default story;
