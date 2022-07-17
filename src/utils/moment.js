import moment from 'moment';

export function momentFromNow(time) {
    return moment(time).fromNow();
}
