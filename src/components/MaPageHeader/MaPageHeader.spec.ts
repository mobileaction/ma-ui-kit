import { mount } from '@vue/test-utils';
import MaPageHeader from './';

describe('MaPageHeader', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(MaPageHeader);
  });
  it('works', () => {
    expect(true).toEqual(true)
  })
});
