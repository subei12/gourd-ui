import Button from '../packages/button/index';

import Badge from '../packages/badge/index';

import CellGroup from '../packages/cell-group/index';

import Cell from '../packages/cell/index';

import Tabbar from '../packages/tabbar/index';

import TabbarItem from '../packages/tabbar-item/index';

import Swipe from '../packages/swipe/index';

import SwipeItem from '../packages/swipe-item/index';

import NavBar from '../packages/navbar/index';

import Image from '../packages/image/index';

import ImageGroup from '../packages/image-group/index';

import Tabs from '../packages/tabs/index';

import Tab from '../packages/tab/index';

import Tag from '../packages/tag/index';

import Title from '../packages/title/index';

import PullRefresh from '../packages/pull-refresh/index';

import Loading from '../packages/loading/index';

import List from '../packages/list/index';

import Overlay from '../packages/overlay/index';

import PostCard from '../packages/post-card/index';

import Divider from '../packages/divider/index';

import Dialog from '../packages/dialog/index';

const components = [
  Button,
  Badge,
  CellGroup,
  Cell,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  NavBar,
  Image,
  ImageGroup,
  Tabs,
  Tab,
  Tag,
  Title,
  PullRefresh,
  Loading,
  List,
  Overlay,
  PostCard,
  Divider,
  Dialog
]

let install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


export default {
  Button,
  Badge,
  CellGroup,
  Cell,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  NavBar,
  Image,
  ImageGroup,
  Tabs,
  Tab,
  Tag,
  Title,
  PullRefresh,
  Loading,
  List,
  Overlay,
  PostCard,
  Divider,
  Dialog,
  install
}