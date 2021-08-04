/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access,
@typescript-eslint/no-unsafe-call */
import React from 'react';
import { render } from '@testsutils';
import Tutu from '../Tutu';

const initialize = (options) => {
  const utils = render(<Tutu { ...props }/>)
  const doSomething = () => {}
  
  return {
    ...utils,
    doSomething
  }
}

describe('tutu', () => {
  it('fails', () => {
    const { getByRole, unmount } = initialize();
    expect(false).toBe(true);
    unmount();
  })
})