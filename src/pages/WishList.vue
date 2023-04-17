

<template>
    <div class="bg-indigo-100 text-white w-1/2 m-auto mt-20">
        <div class="bg-blue-400 text-center">
        <h1 class="py-2 font-extrabold">Unsere Wünsche</h1>
        <p class="pb-1">Alle Wünsche: {{ getAllWishs() }}</p>
        <p class="pb-1" v-if="getOpenWishs > 1">Öffene Wünschen: {{ getOpenWishs }}</p>
        <p class="pb-1" v-else-if="getOpenWishs === 1">Ihre Wünschen sind fast fertig</p>
        <p class="pb-1" v-else>Glückwünsch, keine öffnen Wünschen</p>
      </div>
      <div class="text-center m-2 flex justify-between">
        <input class="text-black rounded w-2/3 p-1" v-model="newWish">
        <button class="bg-blue-600 px-3 py-1 rounded text-white" @click="addWishs">hinzufügen</button>
      </div>
      <div v-for="(todo, index) in wishs" :key="todo.todo">
        <Todo :todopro="todo" :indexpro="index" @remove-todo="removeWishs"/>
      </div>
    </div>
  </template>
  
  <script>
  import Todo from "../components/Todo.vue";

  export default {
    name: "WishList",
    components: {
        Todo
    },
    data() {
      return {
        newWish: "",
        wishs: [
          { todo: "x", done: false },
          { todo: "y", done: false },
          { todo: "z", done: true }
        ],
      };
    },
    created() {
      const wishs = localStorage.getItem("wishs");
      if (wishs !== "" && wishs !== null) {
        this.wishs = JSON.parse(wishs);
      }
    },
    methods: {
      removeWishs(index) {
        this.wishs.splice(index, 1);
        this.stroeWishs();
      },
      addWishs() {
        if (this.newWish && this.newWish.length != 0) {
          this.wishs.push({todo: this.newWish, done: false});
          this.newWish = "";
          this.stroeWishs();
        }
      },
      getAllWishs() {
        return this.wishs.length;
      },
      stroeWishs() {
        localStorage.setItem("wishs", JSON.stringify(this.wishs));
      }
    },
    computed: {
      getOpenWishs() {
        return this.wishs.filter(todo => !todo.done).length;
      }
    }
  };
  </script>
  
  