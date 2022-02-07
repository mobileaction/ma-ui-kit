import { mount } from '@vue/test-utils';
import MaCard from './';

describe('MaCard', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(MaCard);
  });
  it('works', () => {
    expect(true).toEqual(true)
  })
});
