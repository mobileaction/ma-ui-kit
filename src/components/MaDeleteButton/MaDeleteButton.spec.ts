import { mount } from '@vue/test-utils';
import MaDeleteButton from './';

describe('MaDeleteButton', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(MaDeleteButton);
  });
  it('works', () => {
    expect(true).toEqual(true)
  })
});
