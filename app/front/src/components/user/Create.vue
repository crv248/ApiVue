<template>
  <div>
    <Toolbar :handle-submit="onSendForm" :handle-reset="resetForm">
      <Breadcrumb :values="$route.meta.breadcrumb" slot="left" />
    </Toolbar>
    <UserForm ref="createForm" :values="item" :errors="violations" />
    <Loading :showing="isLoading" />
  </div>
</template>

<script>
import { create } from '../../utils/vuexer';
import UserForm from './Form';
import { Breadcrumb, Toolbar, Loading } from '../../common/components';
import CreateMixin from '../../common/mixins/CreateMixin';
const servicePrefix = 'User';
const { getters, actions } = create(servicePrefix);

export default {
  name: 'UserCreate',
  servicePrefix,
  mixins: [CreateMixin],
  components: {
    UserForm,
    Breadcrumb,
    Toolbar,
    Loading,
  },

  data() {
    return {
      item: {
      },
    };
  },

  computed: getters,
  methods: actions,
};
</script>
