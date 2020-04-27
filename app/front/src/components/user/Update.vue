<template>
  <div>
    <Toolbar :handle-submit="onSendForm" :handle-reset="resetForm" :handle-delete="del">
      <Breadcrumb :values="$route.meta.breadcrumb" :item="item" slot="left" />
    </Toolbar>
    <UserForm ref="updateForm" v-if="item" :values="item" :errors="violations" />
    <Loading :showing="isLoading || deleteLoading" />
  </div>
</template>

<script>
import { update } from '../../utils/vuexer';
import UserForm from './Form.vue';
import { Breadcrumb, Toolbar, Loading } from '../../common/components';
import UpdateMixin from '../../common/mixins/UpdateMixin';
const servicePrefix = 'User';
const { getters, actions } = update(servicePrefix);

export default {
  name: 'UserUpdate',
  servicePrefix,
  mixins: [UpdateMixin],
  components: {
    UserForm,
    Breadcrumb,
    Toolbar,
    Loading,
  },

  computed: getters,
  methods: actions,
};
</script>
