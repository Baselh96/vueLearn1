<template>
  <div
    class="h-16 bg-gradient-to-r from-green-400 text-white text-xl to-blue-500 flex justify-around items-center"
  >
    <div style="font-family: cursive" class="font-extrabold italic">List-Application</div>
    <div class="flex justify-around w-1/4">
        <router-link to="/todo">ToDoList</router-link>
        <router-link to="/wishlist">WishList</router-link>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Navbar",
};
</script>
  
  