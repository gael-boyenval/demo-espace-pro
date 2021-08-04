import React from 'react'

import Toto from './Toto'

export default {
  title: 'ui-kit/Toto',
  component: Toto,
}

const Template = args => (
  <Toto {...args}>
    {args.children}
  </Toto>
)

export const Default = Template.bind({})

Default.args = {
  arg: 'arg',
}
