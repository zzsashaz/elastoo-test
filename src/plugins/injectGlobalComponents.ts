import Vue from 'vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseSelect from '@/components/ui/BaseSelect.vue';

export default ():void => {
  Vue.component('base-button', BaseButton);
  Vue.component('base-select', BaseSelect);
};
