<template>
  <div>
    <crh-input
      :id="name"
      :type="text"
    />
  </div>
</template>

<script>
import CrhInput from './CrhInput.vue';

export default {
  components: {
    CrhInput,
  },
};
</script>
