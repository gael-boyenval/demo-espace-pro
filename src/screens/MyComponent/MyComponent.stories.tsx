import React from 'react'

import MyComponent from './MyComponent'

export default {
  title: 'ui-kit/MyComponent',
  component: MyComponent,
}

const Template = args => (
  <MyComponent {...args}>
    {args.children}
  </MyComponent>
)

export const Default = Template.bind({})

Default.args = {
  arg: 'arg',
}
