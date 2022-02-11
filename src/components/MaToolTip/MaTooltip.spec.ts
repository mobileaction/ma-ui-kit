import { mount } from '@vue/test-utils';
import MaTooltip from './';

describe('MaTooltip', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(MaTooltip);
  });
  it('works', () => {
    expect(true).toEqual(true)
  });
});
