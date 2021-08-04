/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access,
@typescript-eslint/no-unsafe-call */
import React from 'react';
import { render } from '@testsutils';
import MyComponent from '../MyComponent';

const initialize = (options) => {
  const utils = render(<MyComponent { ...props }/>)
  const doSomething = () => {}
  
  return {
    ...utils,
    doSomething
  }
}

describe('myComponent', () => {
  it('fails', () => {
    const { getByRole, unmount } = initialize();
    expect(false).toBe(true);
    unmount();
  })
})