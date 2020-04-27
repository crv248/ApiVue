<template>
  <q-form class="q-pa-md q-col-gutter-y-md">
    <div class="row q-gutter-md">
      <q-input
        v-model="item.contentUrl"
        filled
        type="text"
        :label="$t('contentUrl')"
        lazy-rules
        :rules="[isInvalid('contentUrl')]"
        class="col-12 col-md"
      />
    
      <div class="col-12 col-md"></div>
    </div>
    
  </q-form>
</template>

<script>
import { form } from '../../utils/vuexer';

const { getters, actions, mutations } = form([
]);

export default {
  name: 'MediaObjectForm',

  props: {
    values: {
      type: Object,
      required: true,
    },

    errors: {
      type: Object,
      default: () => {},
    },

    initialValues: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    ...getters,

    // eslint-disable-next-line
    item() {
      return this.initialValues || this.values;
    },

    violations() {
      return this.errors || {};
    },
  },

  methods: {
    ...actions,
    ...mutations,

    isInvalid(/* key */) {
      return true;
      // return val => {
      //   if (typeof val == 'number') {
      //     if (val > 0) {
      //       return true;
      //     } else {
      //       return this.$t('Please, insert a value bigger than zero!');
      //     }
      //   }
      //   if (!(val && val.length > 0)) return this.$t('Please type something');
      //   return Object.keys(this.violations).length === 0 && !this.violations[key];
      // };
    },

  },
};
</script>
