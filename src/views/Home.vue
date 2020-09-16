<template>
  <div class="app__body">
    <div v-if="user">
      <Sidebar />
      <Chat />
    </div>
    <div v-else>
      <Login />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar.vue";
import Chat from "@/components/Chat.vue";
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Login,
    Sidebar,
    Chat,
  },
  data() {
    return {
      user: null,
    };
  },
};
</script>
<style>
.app__body {
  display: flex;
  height: 90vh;
  width: 90vw;
  background-color: white;
  box-shadow: -1px 4px 20px -6px black;
}
</style>
