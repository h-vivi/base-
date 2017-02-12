<template>
  <footer class="wrapper">
    <ul class="route-list">
      <li
        v-for="route in routes"
        class="route-list-item"
        :class="{ 'active': $route.path === route.to }">

        <router-link
          :to="route.to"
          class="route-list-item-link"
          :class="{ 'active': $route.path === route.to }">

          {{ route.name }}
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        routes: [
          { name: 'Hots', to: '/major-topics' },
          { name: 'Focus', to: '/focus' },
          { name: 'Messages', to: '/messages' },
          { name: 'Me', to: '/me' },
        ],
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper {
    width: 100%;
    height: 100%;
  }

  .route-list {
    display: flex;
    /* if the item's total width is 100%, the following style is not necessary. */
    justify-content: space-between;
  }

  .route-list .route-list-item {
    width: 25%;
    text-align: center;
  }

  .route-list .route-list-item.active {
    background: #00ffe4;
  }

  .route-list .route-list-item.active > .route-list-item-link {
    color: #fff;
  }

  .route-list-item .route-list-item-link {
    display: inline-block;
    width: 100%;
    cursor: pointer;
  }
</style>
