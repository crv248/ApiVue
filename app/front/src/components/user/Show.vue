<template>
  <div>
    <Toolbar :handle-delete="del">
      <Breadcrumb :values="$route.meta.breadcrumb" :item="item" slot="left" />
    </Toolbar>

    <div v-if="item" class="table-responsive">
      <q-markup-table>
        <thead>
          <tr>
            <th>{{ $t('Field') }}</th>
            <th>{{ $t('Value') }}</th>

            <th>{{ $t('Field') }}</th>
            <th>{{ $t('Value') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ $t('image') }}</td>
            <td>
            {{ formatDateTime(item['image'], 'long') }}            </td>

          
            <td>{{ $t('email') }}</td>
            <td>
            {{ formatDateTime(item['email'], 'long') }}            </td>

          </tr>
          
          <tr>
            <td>{{ $t('username') }}</td>
            <td>
            {{ formatDateTime(item['username'], 'long') }}            </td>

          
            <td>{{ $t('roles') }}</td>
            <td>
            {{ formatDateTime(item['roles'], 'long') }}            </td>

          </tr>
          
          <tr>
            <td>{{ $t('password') }}</td>
            <td>
            {{ formatDateTime(item['password'], 'long') }}            </td>

          
            <td>{{ $t('salt') }}</td>
            <td>
            {{ formatDateTime(item['salt'], 'long') }}            </td>

          </tr>
          
        </tbody>
      </q-markup-table>
    </div>
    <Loading :showing="isLoading" />
  </div>
</template>

<script>
import { show } from '../../utils/vuexer';
import { Breadcrumb, Toolbar, Loading } from '../../common/components';
import ShowMixin from '../../common/mixins/ShowMixin';
const servicePrefix = 'User';
const { getters, actions } = show(servicePrefix);

export default {
  name: 'UserShow',
  servicePrefix,
  mixins: [ShowMixin],
  components: {
    Breadcrumb,
    Toolbar,
    Loading,
  },

  computed: getters,
  methods: actions,
};
</script>
