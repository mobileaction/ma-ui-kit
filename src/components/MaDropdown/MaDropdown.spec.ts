import { mount } from '@vue/test-utils';
import MaDropdown from './';

describe('MaDropdown', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(MaDropdown);
  });
  it('works', () => {
    expect(true).toEqual(true)
  });
});
