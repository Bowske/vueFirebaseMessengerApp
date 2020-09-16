<template>
  <div class="app__body">
    <Sidebar />
    <Chat />
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar.vue";
import Chat from "@/components/Chat.vue";

export default {
  name: "Home",
  components: {
    Sidebar,
    Chat,
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
