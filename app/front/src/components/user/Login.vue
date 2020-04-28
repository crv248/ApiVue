<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="email"
        label="Your email *"
        hint="email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        type="password"
        v-model="password"
        label="Your password *"
        lazy-rules
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script>
  import { list } from '../../utils/vuexer';
  import { ActionCell, Breadcrumb, Toolbar } from '../../common/components';
  import ListMixin from '../../common/mixins/ListMixin';
  const servicePrefix = 'Client';
  const { getters, actions } = list(servicePrefix);
  import axios from 'axios'

  export default {
    name: 'ClientList',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      onSubmit (e) {
        e.preventDefault();
        let currentObj = this;

        axios.post('http://localhost/authentication_token', {
          email: this.email,
          password: this.password
        })
          .then(function (response) {
            console.log(response.data);
            currentObj.$q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'Correct credentials.',
              actions: [
                { label: 'Close', color: 'white', handler: () => { /* ... */ } }
              ]
            })

          })
          .catch(function (error) {
            console.log(error);
            currentObj.$q.notify({
              color: 'red-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'Invalid credentials.',
              actions: [
                { label: 'Close', color: 'white', handler: () => { /* ... */ } }
              ]
            })
          });
      },

      onReset () {
        this.email = null
        this.password = null
      }
    }/*,
    mounted: function()  {
      axios.get('http://localhost/api/clients')
        .then(response => (users = response.data['hydra:member']))
        .catch(error => console.log(error));
    }*/
  }
</script>
