<template>
  <div>
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from "./components/addBlog.vue"
import showBlog from "./components/showBlog.vue"
import listBlog from "./components/listBlog.vue"
import navbar from "./components/navbar.vue"

export default {
  components: {
    'addBlog':addBlog,
    'show-blog':showBlog,
    'list-blog':listBlog,
    'app-navbar':navbar
  },
  data () {
    return {
      
    }
  },
  methods: {
    
  },
}
</script>

<style>
body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}

</style>
