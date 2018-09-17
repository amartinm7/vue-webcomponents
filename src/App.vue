<template>
  <div id="app">
    <h1>Vue ❤ Web Components</h1>
    <h2>This is an example of a webcomponent holding a simple carousel</h2>
    <div><p align="left">The main point of this example is to be able to create a HTML TAG called x-simple-carousel which manages the creation of simple carousel.
    Everytime you use the tag a new carousel is created. The application of this technology is so huge.
    Instead of create a full HTML page with a lot of tags, you can create the whole page using custom webcomponents.
      These webcomponents can be created on the fly, injected in the DOM tree.</p> </div>
    <x-ticking-paragraph :contents="paragraphContents" @tick="logTick"></x-ticking-paragraph>
    <x-carousel :contents="paragraphContents" @tick="logTick"></x-carousel>
    <x-simple-carousel :contents="paragraphContents" @tick="logTick"></x-simple-carousel>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      paragraphContents: `I'm data from Vue rendering in a Web Component!`
    }
  },
  methods: {
    logTick() {
      console.log(`The paragraph ticked again. >_>`)
      this.paragraphContents = this.paragraphContents + '.'
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
