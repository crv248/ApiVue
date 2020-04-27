import { types } from './mutation_types';
import { getItemsCommon, getSelectItemsCommon } from '../../../../common/store/list/actions';

const hydraPrefix = 'hydra:';

export const getItems = (context, options) =>
  getItemsCommon(
    context,
    { ...{ page: 'media_objects', params: {} }, ...options },
    { types, hydraPrefix },
  );

export const getSelectItems = (context, options) =>
  getSelectItemsCommon(
    context,
    { ...{ page: 'media_objects', params: { properties: ['id', 'name'] } }, ...options },
    { types, hydraPrefix },
  );
