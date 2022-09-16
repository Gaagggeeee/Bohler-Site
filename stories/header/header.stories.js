import Header from './header.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'Example/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
  Component: Header,
  props: args,
  on: {
    click: args.onClick,
  },
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Header',
};
