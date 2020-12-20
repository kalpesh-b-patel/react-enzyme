import { ADD } from './types';
import { add } from './index';

describe('action type and payload', () => {
  it('has a valid action type', () => {
    const action = add();
    expect(action.type).toEqual(ADD);
  });

  it('has a valid action payload', () => {
    const action = add('payload');
    expect(action.payload).toEqual('payload');
  })
})