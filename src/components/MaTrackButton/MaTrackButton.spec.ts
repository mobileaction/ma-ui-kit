import { mount, Wrapper } from '@vue/test-utils';
import MaTrackButton from './';
import Vue from 'vue'

describe('MaTrackButton', () => {
  let trackButtonWrapper: Wrapper<Vue>;
  let button:Wrapper<Vue>;

  beforeEach(() => {
    trackButtonWrapper = mount(MaTrackButton, {
      propsData: {
        keyword: 'calm',
        disabled: false,
      },
    });

    button = trackButtonWrapper.find("button");
  });

  it('is disabled', () => {
    expect(button.attributes('disabled')).toBeFalsy();
  });

  it('prints keyword to button', () => {
    expect(button.text()).toBe("calm")
  });

  it('triggers a click', async () => {
    await button.trigger('click');
    expect(trackButtonWrapper.emitted()).toHaveProperty('click');
  });

  it('emits click event', async () => {
    trackButtonWrapper.vm.$emit('click', 123);
    await button.trigger('click')
    expect(button.emitted().click[0]).toEqual([123])
  });
});
