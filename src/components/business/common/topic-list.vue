<template>
  <ol class="topic-list">
    <li v-for="topic in topics"><topic-item :topic="topic"></topic-item></li>
  </ol>
</template>

<script>
  import TopicItem from './topic-item';

  export default {
    name: 'topic-list',
    data() {
      return { };
    },
    components: {
      TopicItem,
    },
    props: {
      topics: {
        type: Array,
        default: [],
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
