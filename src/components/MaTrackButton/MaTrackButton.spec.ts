import { mount } from '@vue/test-utils';
import MaTrackButton from './';

describe('MaTrackButton', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(MaTrackButton);
  });
  it('works', () => {
    expect(true).toEqual(true)
  })
});
