<template>
  <div class="wrapper">
    <message-list :messages="messages"></message-list>
    <ui-alert v-show="showAlert" type="success" @dismiss="showAlert = false">Hi I am ui alert.</ui-alert>
  </div>
</template>

<script>
  import MessageList from 'components/business/common/message-list';

  export default {
    name: 'messages',
    data() {
      return {
        messages: [
          { title: 'vivi', content: 'Hi~' },
          { title: 'bq', content: 'Hello~' },
          { title: 'vivi', content: 'I am sleeping~~' },
          { title: 'bq', content: 'Me too~~' },
        ],
        showAlert: true,
      };
    },
    components: {
      MessageList,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
