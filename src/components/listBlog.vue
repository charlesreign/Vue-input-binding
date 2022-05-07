<template>
  <div id="show-blogs">
    <h1>All Blog Article</h1>
    <input type="text" v-model="search" placeholder="search blog">
    <div v-for="item in filteredBlog" class="single-blog" :key="item.id">
        <h2 v-rainbow>{{ item.title| to-uppercase}}</h2>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin"

export default {
  data () {
    return {
      blogs:[],
      search: ""
    }
  },
  methods: {
    
  },

  created(){
      this.$http.get("https://jsonplaceholder.typicode.com/posts")
      .then(function (data) {
          this.blogs = data.body.slice(0,10)
      })
  },
  computed:{

  },
  //Filters
  filters:{
    toUppercase(value) {
      return value.toUpperCase()
    },
    snippet(value){
      return value.slice(0,100) + '...'
    }
  },
  directives:{
    //custom directive
  'rainbow' :{
    bind(el,binding,vnode){
      el.style.color = "#"+Math.random().toString().slice(2,8)
      }
    }
  },
  mixins: [searchMixin]
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

</style>
