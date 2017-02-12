<template>
  <div class="message">
    <div class="message-title">{{ message.title }}</div>
    <div class="message-content">{{ message.content }}</div>
  </div>
</template>

<script>
  export default {
    name: 'message-item',
    data() {
      return { };
    },
    props: {
      message: {
        type: Object,
        require: true,
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .message {
    padding: 10px 6px;
    overflow: hidden;
    font-size: 14px;
    line-height: 1.5;
  }

  .message-title {
    font-size: 16px;
    font-weight: bold;
  }
</style>
