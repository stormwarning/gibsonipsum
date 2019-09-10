<template>
    <label class="relative">
        <input
            v-model.number="value"
            class="absolute input-reset w3 h2 pa0 bn bg-transparent mono f4 fw5 lh-copy white tr"
            type="number"
            :class="shouldDisplayInput ? '' : 'is-hidden'"
            :min="min"
            :max="max"
            :step="step"
            @blur="onBlur"
            @change="onChange"
            @focus="onFocus"
        />
        <span
            class="dib w3 h2 pa0 mono f4 fw5 lh-copy white tr"
            :class="shouldDisplayInput ? 'o-40' : ''"
            >{{ value | zeropad }}</span
        >
    </label>
</template>

<script>
export default {
    filters: {
        zeropad: function(value) {
            return value ? value.toString().padStart(3, '0') : ''
        },
    },

    props: {
        max: {
            type: Number,
            default: Infinity,
        },
        min: {
            type: Number,
            default: -Infinity,
        },
        value: {
            type: Number,
            required: true,
        },
        step: {
            type: Number,
            default: 1,
        },
    },

    data() {
        return {
            shouldDisplayInput: false,
        }
    },

    methods: {
        onBlur() {
            this.shouldDisplayInput = false
        },

        onFocus() {
            this.shouldDisplayInput = true
        },

        onChange($event) {
            this.$emit('update', $event.target.value)
        },
    },
}
</script>

<style scoped lang="postcss">
input {
    right: 0;
    appearance: textfield;

    &.is-hidden {
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        appearance: none;
        margin: 0;
    }

    &:focus {
        box-shadow: 0 2px 0 0 var(--blue);
    }
}

span {
    cursor: text;
}
</style>
