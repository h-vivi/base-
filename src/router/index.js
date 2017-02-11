import Vue from 'vue';
import Router from 'vue-router';
import MajorTopics from 'components/business/main_view/major-topics';
import Focus from 'components/business/main_view/focus';
import Messages from 'components/business/main_view/messages';
import Me from 'components/business/main_view/me';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'major-topics',
      },
    },
    {
      path: '/major-topics',
      name: 'major-topics',
      component: MajorTopics,
    },
    {
      path: '/focus',
      name: 'focus',
      component: Focus,
    },
    {
      path: '/messages',
      name: 'messages',
      component: Messages,
    },
    {
      path: '/me',
      name: 'me',
      component: Me,
    },
  ],
});
