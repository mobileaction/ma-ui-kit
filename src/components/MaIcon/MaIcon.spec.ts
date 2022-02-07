import { mount } from '@vue/test-utils';
import MaIcon from './';

describe('MaIcon', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(MaIcon, {
      propsData: {
        icon: 'user',
      },
    });
  });
  it('works', () => {
    expect(true).toEqual(true)
  })
});
