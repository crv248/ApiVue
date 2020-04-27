import UserList from '../components/user/List';
import UserCreate from '../components/user/Create';
import UserUpdate from '../components/user/Update';
import UserShow from '../components/user/Show';

const list = {
  label: 'UserList',
  icon: 'whatshot',
};
const create = {
  label: 'UserCreate',
  icon: 'whatshot',
};
const update = {
  label: 'UserUpdate',
  icon: 'whatshot',
};
const show = {
  label: 'UserShow',
  icon: 'whatshot',
};

export default [
  {
    name: list['label'],
    path: '/users/',
    component: UserList,
    meta: {
      breadcrumb: [list],
    },
  },
  {
    name: create['label'],
    path: '/users/create',
    component: UserCreate,
    meta: {
      breadcrumb: [
        { ...list , to: { name: list['label'] } },
        create,
      ],
    },
  },
  {
    name: update['label'],
    path: '/users/edit/:id',
    component: UserUpdate,
    meta: {
      breadcrumb: [
        { ...list , to: { name: list['label'] } },
        update,
      ],
    },
  },
  {
    name: show['label'],
    path: '/users/show/:id',
    component: UserShow,
    meta: {
      breadcrumb: [
        { ...list , to: { name: list['label'] } },
        show,
      ],
    },
  },
];
