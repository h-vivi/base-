<template>
  <div class="wrapper">
    <h4 class="title" v-pull-up-refresh>This is major topics.</h4>
    <topic-list
      v-pull-up-refresh
      class="major-topic-list"
      :topics="topics"
      @touchstart.native="handleTouchStart"
      @touchmove.native="handleTouchMove"
      @touchend.native="handleTouchEnd">
        
    </topic-list>
  </div>
</template>

<script>
  import TopicList from 'components/business/common/topic-list';

  export default {
    name: 'major-topics',
    data() {
      return {
        topics: [
          { title: 'lyric', content: 'I love vivi.' },
          { title: 'love songs', content: 'vivi\'s love' },
          { title: 'lyric', content: 'I love vivi.' },
          { title: 'love songs', content: 'vivi\'s love' },
          { title: 'lyric', content: 'I love vivi.' },
          { title: 'love songs', content: 'vivi\'s love' },
          { title: 'lyric', content: 'I love vivi.' },
          { title: 'love songs', content: 'vivi\'s love' },
          { title: 'lyric', content: 'I love vivi.' },
          { title: 'love songs', content: 'vivi\'s love' },
          { title: 'lyric', content: 'I love vivi.' },
          { title: 'love songs', content: 'vivi\'s love' },
          { title: 'lyric', content: 'I love vivi.' },
          { title: 'love songs', content: 'vivi\'s love' },
          { title: 'lyric', content: 'I love vivi.' },
          { title: 'love songs', content: 'vivi\'s love' },
          { title: 'lyric', content: 'I love vivi.' },
          { title: 'love songs', content: 'vivi\'s love' },
          { title: 'lyric', content: 'I love vivi.' },
          { title: 'love songs', content: 'vivi\'s love' },
          { title: 'lyric', content: 'I love vivi.' },
          { title: 'love songs', content: 'vivi\'s love' },
          { title: 'lyric', content: 'I love vivi.' },
          { title: 'love songs', content: 'vivi\'s love' },
          { title: 'lyric', content: 'I love vivi.' },
          { title: 'love songs', content: 'vivi\'s love' },
          { title: 'lyric', content: 'I love vivi.' },
          { title: 'love songs', content: 'vivi\'s love' },
          { title: 'lyric', content: 'I love vivi.' },
          { title: 'love songs', content: 'vivi\'s love' },
          { title: 'lyric', content: 'I love vivi.' },
          { title: 'love songs', content: 'vivi\'s love' },
          { title: 'lyric', content: 'I love vivi.' },
          { title: 'love songs', content: 'vivi\'s love' },
          { title: 'lyric', content: 'I love vivi.' },
          { title: 'love songs', content: 'vivi\'s love' },
          { title: 'lyric', content: 'I love vivi.' },
          { title: 'love songs', content: 'vivi\'s love' },
          { title: 'lyric', content: 'I love vivi.' },
          { title: 'love songs', content: 'vivi\'s love' },
          { title: 'lyric', content: 'I love vivi.' },
          { title: 'love songs', content: 'vivi\'s love' },
          { title: 'lyric', content: 'I love vivi.' },
          { title: 'love songs', content: 'vivi\'s love' },
        ],
      };
    },
    methods: {
      handleTouchStart(evt) {
        // eslint-disable-next-line
        false && console.log('touch start', evt);
      },
      handleTouchMove(evt) {
        // eslint-disable-next-line
        false && console.log('touch move', evt);
      },
      handleTouchEnd(evt) {
        // eslint-disable-next-line
        false && console.log('touch end', evt);
      },
    },
    components: {
      TopicList,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .wrapper > .title {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #cac4c4;
    margin-bottom: 7px;
  }

  .wrapper > .major-topic-list {
    position: absolute;
    top: 47px;
    width: 100%;
    height: calc(100% - 40px - 7px);
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
