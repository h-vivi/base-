<template>
  <ol class="message-list">
    <li v-for="message in messages"><message-item :message="message"></message-item></li>
  </ol>
</template>

<script>
  import MessageItem from './message-item';

  export default {
    name: 'message-list',
    data() {
      return { };
    },
    components: {
      MessageItem,
    },
    props: {
      messages: {
        type: Array,
        default: [],
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
