import { mount } from '@vue/test-utils';
import MaBadge from './';

describe('MaBadge', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(MaBadge);
  });
  it('works', () => {
    expect(true).toEqual(true)
  })
});
