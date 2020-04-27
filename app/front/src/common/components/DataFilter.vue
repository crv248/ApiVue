<template>
  <q-expansion-item icon="search" :label="$t('Filters')" v-model="filtersExpanded">
    <q-card>
      <q-card-section>
        <slot name="filter"></slot>
      </q-card-section>
      <q-card-section>
        <q-btn :label="$t('Filter')" color="primary" @click="handleFilter" />
        <q-btn :label="$t('Reset')" color="primary" flat class="q-ml-sm" @click="handleReset" />
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<script>
export default {
  name: 'DataFilter',
  props: {
    handleReset: {
      type: Function,
      required: true,
    },
    handleFilter: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      filtersExpanded: false,
    };
  },
};
</script>
