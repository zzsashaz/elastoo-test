<template>
  <div
    class="base-select"
    :tabindex="0"
    :disabled="disabled"
    @blur="isOpen = false"
  >
    <button
      class="base-select__selected"
      :class="{'base-select__selected_active': isOpen}"
      :disabled="disabled"
      @click="toggle"
    >
      <template>
        {{ value.title }}
      </template>
    </button>
    <input
      :value="value"
      style="display: none"
    >
    <transition name="fade">
      <div
        v-if="isOpen"
        class="base-select__items"
      >
        <template>
          <button
            v-for="(option) of options"
            :key="option.value"
            class="base-select__item base-select__item_single"
            @click="selectItem(option)"
          >
            {{ option.title }}
          </button>
        </template>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { ISelectOption } from '@/types/ui/BaseSelect';

export default Vue.extend({
  name: 'base-select',
  props: {
    options: {
      type: Array as PropType<ISelectOption<string>[] | string[]>,
      required: true,
    },
    value: {
      type: [Object, String] as PropType<ISelectOption<string> | string>,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    selectHide() :string {
      return !this.isOpen ? 'base-select_selectHide' : '';
    },
  },
  methods: {
    selectItem(item:ISelectOption<string> | string): void {
      this.isOpen = false;
      this.$emit('input', item);
    },
    toggle() :void {
      this.isOpen = !this.isOpen;
    },
  },
});
</script>

<style scoped lang="scss">
.base-select {
  position: relative;
  text-align: left;
  outline: none;
  font-size: 18px;
  font-weight: 300;

  &__selected {
    width: 100%;
  }

  &__items {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;

    & > button {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
  &__item {
    transition: all ease-in-out .2s;
    cursor: pointer;
    user-select: none;
    font-weight: 500;

    &_active {
      font-size: 18px;
      font-weight: 700;
    }
  }
}
</style>
