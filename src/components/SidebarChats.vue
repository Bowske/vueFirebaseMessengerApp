<template>
  <div v-if="!addNewChat">
    <div
      id="sideBarChat"
      class="sidebarChats"
      :style="{backgroundColor: (clicked ? '#f5f5f5' : 'white')}"
    >
      <img class="roomIcon" :src="`${icon}`" />
      <div class="chatsNames">
        <h2>{{name}}</h2>
        <p>Last message</p>
        <p>{{id}}</p>
      </div>
    </div>
  </div>
  <div v-else>
    <div @click="createRoomName" class="sidebarChats">
      <h2>Dodaj czat</h2>
    </div>
  </div>
</template>

<script>
import db from "../firebase.js";
export default {
  name: "SidebarChats",
  props: {
    icon: String,
    id: String,
    name: String,
    addNewChat: Boolean,
  },
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    createRoomName() {
      const promptInput = prompt("WITAM");
      if (promptInput) {
        //baza danych cos sie dzieje
        db.collection("rooms").add({
          name: promptInput,
          ikona: `https://api.adorable.io/avatars/45/${this.generateRandom}`,
        });
      }
    },
    // setBackgroundColor() {
    //   this.chatBoolColor
    //     ? (document.getElementById("sideBarChat").style.backgroundColor =
    //         "white") && (this.chatBoolColor = false)
    //     : (document.getElementById("sideBarChat").style.backgroundColor =
    //         "#f5f5f5") && (this.chatBoolColor = true);
    // }
  },
  computed: {
    generateRandom() {
      return Math.ceil(Math.random() * 100) + 1;
    },
  },
};
</script>

<style>
.sidebarChats:hover {
  cursor: pointer;
}
.sidebarChats {
  display: flex;
  align-items: center;
  margin: 16px;
  border-radius: 5px;
}
.chatsNames {
  padding-left: 10px;
}
.chatsNames h2 {
  font-size: 16px;
}
.chatsNames p {
  font-size: 13px;
  color: gray;
}
.roomIcon {
  border-radius: 50%;
  margin: 7px;
}
</style>