
<template>
    <div class="bg-indigo-100 text-white w-1/2 m-auto mt-20">
      <div class="bg-blue-400 text-center">
        <h1 class="py-2 font-extrabold">Unsere ToDos</h1>
        <p class="pb-1">Alle ToDos: {{ getAllToDo() }}</p>
        <p class="pb-1" v-if="getOpenToDo > 1">Öffene ToDos: {{ getOpenToDo }}</p>
        <p class="pb-1" v-else-if="getOpenToDo === 1">Ihre Todos sind fast fertig</p>
        <p class="pb-1" v-else>Glückwünsch, keine öffnen ToDos</p>
      </div>
      <div class="text-center m-2 flex justify-between">
        <input class="text-black rounded w-2/3 p-1" v-model="newTodo">
        <button class="bg-blue-600 px-3 py-1 rounded text-white" @click="addToDO">hinzufügen</button>
      </div>
      <div v-for="(todo, index) in todos" :key="todo.todo">
        <Todo :todopro="todo" :indexpro="index" @remove-todo="removetodo"/>
      </div>
    </div>
  </template>
  
  <script>
  import Todo from "../components/Todo.vue";

  export default {
    name: "ToDoList",
    components: {
      Todo,
    },
    data() {
      return {
        newTodo: "",
        todos: [
          { todo: "Einkaufen", done: false },
          { todo: "Games", done: false },
          { todo: "Shopping", done: true },
          { todo: "Reisen", done: false },
          { todo: "Programmieren", done: true },
        ],
      };
    },
    created() {
        const todos = localStorage.getItem("todos");
      if (todos !== "" && todos !== null) {
        this.todos = JSON.parse(todos);
      }
    },
    /* mounted() {
      console.log("mounted");
    }, 
    beforeCreate() {
      console.log("beforeCreate");
    },
    created() {
      console.log("created");
    },
    beforeMount() {
      console.log("beforeMount");
    },
    beforeUpdate() {
      console.log("beforeUpdate");
    },
    updated() {
      console.log("updated");
    },
    beforeUnmount() {
      console.log("beforeUnmount");
    },
    unmounted() {
      console.log("unmounted");
    }, */
    methods: {
      removetodo(index) {
        this.todos.splice(index, 1);
        this.stroeToDos();
      },
      addToDO() {
        if (this.newTodo && this.newTodo.length != 0) {
          this.todos.push({todo: this.newTodo, done: false});
          this.newTodo = "";
          this.stroeToDos();
        }
      },
      getAllToDo() {
        return this.todos.length;
      },
      stroeToDos() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    },
    computed: {
      getOpenToDo() {
        return this.todos.filter(todo => !todo.done).length;
      }
    }
  };
  </script>
  
  