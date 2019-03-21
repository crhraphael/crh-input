<template>
  <div
    id="crhInput"
    class="crh-input container">
    <slot name="label" />

    <!-- 3 or more if checks every call ? -->
    <!-- Maybe each input should be a separate component ? -->
    <text-input
      v-if="type === 'text'"
      :id="id"
    />
    <select-input
      v-if="type === 'select'"
      :id="id"
    />
    <checkbox-input
      v-if="type === 'checkbox'"
      :id="id"
    />
  </div>
</template>

<script>

import CheckboxInput from './components/CheckboxInput';
import TextInput from './components/TextInput';
import SelectInput from './components/SelectInput';

export default {
  components: {
    CheckboxInput,
    TextInput,
    SelectInput,
  },
  props: {
    /**
         * Defines which input type should be rendered
         * Could be a Number and possibly an enum for types.
         * Surely it could become messy but.. yolo.
         */
    type: {
      type: String,
      default: 'text',
    },
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {

    };
  },
  methods: {
  },
};
</script>
