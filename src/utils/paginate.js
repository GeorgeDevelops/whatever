import _ from 'lodash';

export function paginate(items, pageNum, pageSize){
    const index = (pageNum - 1);
    return _(items).slice(index).take(pageSize).value();
}