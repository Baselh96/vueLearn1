<template>
  <div
    class="p-3 flex justify-between items-center"
    :class="{ 'bg-green-800': todo.done, 'bg-red-700': !todo.done }"
  >
    <h1 class="cursor-pointer w-3/4" @click="changeToDo">{{ todo.todo }}</h1>
    <button class="bg-black px-3 py-1 rounded" @click="toremovetodo">Löschen</button>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todopro", "indexpro"],
  data() {
    return {
      todo: this.todopro,
    };
  },
  methods: {
    toremovetodo() {
      this.$emit("remove-todo", this.indexpro);
    },
    changeToDo() {
      this.todo.done = !this.todo.done;
    },
  },
};
</script>

