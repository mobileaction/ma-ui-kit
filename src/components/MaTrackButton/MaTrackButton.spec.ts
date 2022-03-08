import { mount, Wrapper } from '@vue/test-utils';
import MaTrackButton from './index.ts';
import Vue from 'vue';

describe('MaTrackButton', () => {
    let trackButtonWrapper: Wrapper<Vue>;
    let button:Wrapper<Vue>;

    beforeEach(() => {
        trackButtonWrapper = mount(MaTrackButton, {
            propsData: {
                keyword: 'cal',
                disabled: false,
            },
        });

        button = trackButtonWrapper.find('button');
    });
    it('returns the same output', () => {
        expect(trackButtonWrapper).toMatchSnapshot();
    });

    it('is disabled', () => {
        expect(button.attributes('disabled')).toBeFalsy();
    });

    it('prints keyword to button', () => {
        expect(button.text()).toBe('cal');
    });

    it('triggers a click', async () => {
        await button.trigger('click');
        expect(trackButtonWrapper.emitted()).toHaveProperty('click');
    });

    it('emits click event', async () => {
        trackButtonWrapper.vm.$emit('click', 123);
        await trackButtonWrapper.vm.$nextTick(); // Wait until $emits have been handled
        expect(button.emitted().click[0]).toEqual([123]);
    });
});
