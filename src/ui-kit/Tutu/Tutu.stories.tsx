import React from 'react'

import Tutu from './Tutu'

export default {
  title: 'ui-kit/Tutu',
  component: Tutu,
}

const Template = args => (
  <Tutu {...args}>
    {args.children}
  </Tutu>
)

export const Default = Template.bind({})

Default.args = {
  arg: 'arg',
}
