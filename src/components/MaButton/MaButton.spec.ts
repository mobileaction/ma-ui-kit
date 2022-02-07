import { mount } from '@vue/test-utils';
import MaButton from './';

describe('MaButton', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(MaButton,{
      propsData: {
        size: 'large'
      },
    });
  });
  it('works', () => {
    expect(true).toEqual(true)
  })
});
