<template>
  <div class="topic">
    <div class="topic-title">{{ topic.title }}</div>
    <div class="topic-content">{{ topic.content }}</div>
  </div>
</template>

<script>
  export default {
    name: 'topic-item',
    data() {
      return { };
    },
    props: {
      topic: {
        type: Object,
        require: true,
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topic {
    padding: 10px 6px;
    overflow: hidden;
    font-size: 14px;
    line-height: 1.5;
  }

  .topic-title {
    font-size: 16px;
    font-weight: bold;
  }
</style>
