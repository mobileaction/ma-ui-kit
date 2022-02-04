import { mount } from '@vue/test-utils';
import MaButton from './';

describe('MaButton', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(MaButton);
  });
  it('works', () => {
    expect(true).toEqual(true)
  })
});
