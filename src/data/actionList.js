import hashImg from '../assets/hash.svg';
import usersImg from '../assets/users.svg';
import trashImg from '../assets/trash.svg';
import inboxImg from '../assets/inbox.svg';
import itemImg from '../assets/star.svg';
import calenderImg from '../assets/calender.svg';

const actionList = [
  {
    name: 'inbox',
    cssClass: 'feather feather-inbox',
    img: inboxImg,
    label: 'Inbox'
  },
  {
    name: 'star',
    cssClass: 'feather feather-star',
    img: itemImg,
    label: 'Today'
  },
  {
    name: 'calendar',
    cssClass: 'feather feather-calendar',
    img: calenderImg,
    label: 'Upcoming'
  },
  {
    name: 'hash',
    cssClass: 'feather feather-hash',
    img: hashImg,
    label: 'Important'
  },
  {
    name: 'users',
    cssClass: 'feather feather-users',
    img: usersImg,
    label: 'Meetings'
  },
  {
    name: 'trash',
    cssClass: 'feather feather-trash',
    img: trashImg,
    label: 'Trash'
  }
];

export default actionList;
