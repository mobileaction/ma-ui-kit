import $_ from './dashUtil.ts';

describe('utils', () => {
    it('should return given string with unshifted dash', () => {
        expect($_('default')).toEqual('-default');
    });
});
