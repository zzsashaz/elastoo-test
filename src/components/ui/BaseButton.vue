<template>
  <button
    class="base-btn"
    :type="btnType"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    btnType: {
      type: String,
      default: 'button',
    },
  },
});
</script>

<style scoped lang="scss">

</style>
