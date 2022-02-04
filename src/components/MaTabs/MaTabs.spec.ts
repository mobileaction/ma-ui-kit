import { mount } from '@vue/test-utils';
import MaTabs from './';

describe('MaTabs', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(MaTabs);
  });
  it('works', () => {
    expect(true).toEqual(true)
  })
});
