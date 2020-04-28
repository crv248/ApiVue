<template>
  <q-form class="q-pa-md q-col-gutter-y-md">
    <div class="row q-gutter-md">
      <q-select
        v-model="item.image"
        filled
        :label="$t('image')"
        lazy-rules
        :rules="[isInvalid('image')]"
        @filter="imageFilterFn"
        :options="imageSelectItems"
        option-value="@id"
        option-label="name"
        class="col-12 col-md"
        emit-value
        map-options
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">{{ $t('No results') }}</q-item-section>
          </q-item>
        </template>
      </q-select>

      <q-input
        v-model="item.email"
        filled
        type="text"
        :label="$t('email')"
        lazy-rules
        :rules="[isInvalid('email')]"
        class="col-12 col-md"
      />
    </div>
    <div class="row q-gutter-md">

      <q-input
        v-model="item.plainPassword"
        filled
        type="text"
        :label="$t('password')"
        lazy-rules
        :rules="[isInvalid('password')]"
        class="col-12 col-md"
      />
      <q-input
        v-model="item.password"
        filled
        type="text"
        :label="$t('password')"
        lazy-rules
        :rules="[isInvalid('password')]"
        class="col-12 col-md"
      />
    </div>

  </q-form>
</template>

<script>
import { form } from '../../utils/vuexer';

const { getters, actions, mutations } = form([
  { name: 'image', module: 'MediaObject'},
]);

export default {
  name: 'UserForm',

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

    imageFilterFn(val, update /* , abort */) {
      const params = {
        'exists[image]': false,
      };
      const template = JSON.stringify(params);

      return this.imageSelectItems !== null && this.imageSelectItemsTemplate === template
        ? update()
        : this.imageGetSelectItems({ params }).then(() => {
            this.imageSetSelectItemsTemplate(template);
            update();
          });
    },
  },
};
</script>
