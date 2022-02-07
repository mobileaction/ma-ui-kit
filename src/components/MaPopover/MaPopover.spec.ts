import { mount } from '@vue/test-utils';
import MaPopover from './';

describe('MaPopover', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(MaPopover);
  });
  it('works', () => {
    expect(true).toEqual(true)
  })
});
