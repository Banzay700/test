import {
  BsBookmark,
  BsBookmarkFill,
  BsHouseDoor,
  BsHouseDoorFill,
  BsPeople,
  BsPeopleFill,
} from 'react-icons/bs'

export const menuItems = [
  {
    id: 1,
    title: 'Home',
    to: '/',
    Icon: BsHouseDoor,
    IconActive: BsHouseDoorFill,
  },
  {
    id: 2,
    title: 'Friends',
    to: '/friends',
    Icon: BsPeople,
    IconActive: BsPeopleFill,
  },
  {
    id: 3,
    title: 'Saved',
    to: '/saved',
    Icon: BsBookmark,
    IconActive: BsBookmarkFill,
  },
]
