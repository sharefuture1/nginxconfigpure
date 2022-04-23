

import isChanged from './is_changed';

export default (defaults, cat, isInteraction = true) => {
    return Object.keys(defaults).reduce((prev, key) => {
        prev[key] = {
            get() {
                return this.$props.data[key].value;
            },
            set (value) {
                // Save user interaction if value changed
                if (isInteraction
                    && this.$parent
                    && 'data' in this.$parent.$props
                    && 'hasUserInteraction' in this.$parent.$props.data
                    && !this.$parent.$props.data.hasUserInteraction
                    && this.$props.data[key].value !== value)
                        this.$parent.$props.data.hasUserInteraction = true;

                this.$props.data[key].value = value;
                this.$props.data[key].computed = value;
            },
        };
        prev[key + 'Default'] = {
            get() {
                return this.$props.data[key].default;
            },
        };
        prev[key + 'Enabled'] = {
            get() {
                return this.$props.data[key].enabled;
            },
        };
        prev[key + 'Changed'] = {
            get() {
                return isChanged(this.$props.data[key], cat, key);
            },
        };
        return prev;
    }, {});
};
