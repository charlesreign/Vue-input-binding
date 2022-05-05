<template>
  <div id="addBlog">
    <h2>Add a new Blog post</h2>
    <form v-if="!submitted">
        <label for="">Blog title</label>
        <input type="text" v-model.lazy="blog.title" name="title" id="title" required>
        <label for="">Blog post</label>
        <textarea rows="" cols="" v-model.lazy="blog.content"></textarea>
        <div id="checkbox">
            <label for="">entertainment</label>
            <input type="checkbox" name="" id="" value="entertainment" v-model="blog.categories">
            <label for="">tech</label>
            <input type="checkbox" name="" id="" value="tech" v-model="blog.categories">
            <label for="">news</label>
            <input type="checkbox" name="" id="" value="news" v-model="blog.categories">
            <label for="">finance</label>
            <input type="checkbox" name="" id="" value="finance" v-model="blog.categories">
        </div>
        <label for="">Author</label>
        <select v-model="blog.author">
            <option v-for="author in authors" :key="author.id"> {{ author }}</option>
        </select>
        <div>
            <button v-on:click.prevent="postblog">Add Blog</button>
        </div>
    </form>
    <div v-if="submitted">
        <h3>Thanks for adding post</h3>
    </div>
    <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog title {{ blog.title }}</p>
        <p>Blog content {{ blog.content }}</p>
        <p>Blog categories:</p>
        <ul>
            <li v-for="category in blog.categories" :key="category.id">{{ category }}</li>
        </ul>
        <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blog: {
          title: "",
          content: "",
          categories: [],
          author: ""
      },
      authors: ['charliesCode','cisse','theBlogger'],
      submitted: false
    }
  },
  methods: {
    postblog: function () {
        this.$http.post("https://jsonplaceholder.typicode.com/posts",{
            title: this.blog.title,
            body: this.blog.content,
            userId: 1
        }).then(function (data) {
            console.log(data);
            this.submitted = true
        })
    }
  },
}
</script>

<style>
#addBlog *{
    box-sizing: border-box;
}
#addBlog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkbox input{
    display: inline-block;
    margin-right: 10px;
}
#checkbox label{
    display: inline-block;
}

</style>
