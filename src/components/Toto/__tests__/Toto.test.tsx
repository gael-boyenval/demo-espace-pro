/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access,
@typescript-eslint/no-unsafe-call */
import React from 'react';
import { render } from '@testsutils';
import Toto from '../Toto';

const initialize = (options) => {
  const utils = render(<Toto { ...props }/>)
  const doSomething = () => {}
  
  return {
    ...utils,
    doSomething
  }
}

describe('toto', () => {
  it('fails', () => {
    const { getByRole, unmount } = initialize();
    expect(false).toBe(true);
    unmount();
  })
})