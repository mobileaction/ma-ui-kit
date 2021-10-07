import Vue from 'vue';

class MaPropValidator {
    static oneOf(validValues, matcher = (value, checkValue) => value === checkValue) {
        let _validValues = validValues;
        if (!Array.isArray(_validValues)) {
            if (!_validValues || typeof _validValues !== 'object') {
                throw new Error('Invalid valid values given, it must be an array or object');
            }
            _validValues = Object.keys(_validValues);
        }
        if (!_validValues.length) {
            Vue.$log.debug('Empty valid values given for prop', validValues);
        }
        return (value) => {
            const valid = _validValues.filter(checkValue => matcher(value, checkValue)).length > 0;
            if (!valid) {
                Vue.$log.error('Invalid value given for component:', value, '\nIt must be one of:', _validValues);
            }
            return valid;
        };
    }

    static listItemsHasFields(fieldKeys) {
        if (!Array.isArray(fieldKeys)) {
            throw new Error('Invalid field keys given, it must be an array');
        }
        return (value) => {
            if (!Array.isArray(value)) {
                Vue.$log.error('Invalid prop given: it must be an array', value);
                return false;
            }
            return value.every((c) => {
                if (typeof c !== 'object') {
                    Vue.$log.error('Invalid prop list item[] given:', c);
                    return false;
                }

                return fieldKeys.every((k) => {
                    if (!Object.hasOwnProperty.call(c, k)) {
                        Vue.$log.error(`Invalid prop element given missing key="${ k }"`, c);
                        return false;
                    }
                    return true;
                });
            });
        };
    }

    static listItemsOneOf(validValues, matcher = (value, checkValue) => value === checkValue) {
        if (!Array.isArray(validValues)) {
            throw new Error('Invalid field keys given, it must be an array');
        }
        return value => (Array.isArray(value) ? value : [value]).every((c) => {
            if (!validValues.find(v => matcher(v, c))) {
                Vue.$log.error(`Invalid prop element given with unknown value="${ c }"`);
                return false;
            }
            return true;
        });
    }
}

export const storeValidator = MaPropValidator.oneOf(['ios', 'play']);

export default MaPropValidator;
