<template>
  <div class="chat">
    <div class="chat__header">
      <div class="iconInfoWrapper">
        <div class="chat__headerIcon">
          <img class="roomIcon" v-if="previewData()" :src="`${firebaseData.ikona}`" />
        </div>
        <div class="chat__headerInfo">
          <span v-if="previewData()" class="roomName">{{firebaseData.name}}</span>
          <p class="lastOnline">Last online</p>
        </div>
      </div>
      <div class="chat__headerSideIcons">
        <font-awesome-icon class="iconChatHeader" icon="phone" />
        <font-awesome-icon class="iconChatHeader" icon="camera" />
        <font-awesome-icon class="iconChatHeader" icon="info-circle" />
      </div>
    </div>
    <div class="chat__body">
      <div v-for="(message,i) in messages" :key="i">
        <div v-if="checkIfSender(message)" class="chat__message chat__sender">
          <span>{{message.message}}</span>
        </div>
        <div v-else class="chat__message chat__receiver">
          <span>{{message.message}}</span>
        </div>
      </div>
    </div>
    <div class="chat__footer">
      <div class="footer__icons">
        <font-awesome-icon class="iconChatFooter" icon="plus-circle" />
        <font-awesome-icon class="iconChatFooter" icon="film" />
        <font-awesome-icon class="iconChatFooter" icon="sticky-note" />
        <font-awesome-icon class="iconChatFooter" icon="image" />
      </div>
      <form>
        <input class="form__input" v-model="input" placeholder="Napisz cos" type="text" />
        <button @click.prevent="sendMessage()" type="submit" class="sendButton">
          <font-awesome-icon class="iconLastHeader" icon="paper-plane" />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import db from "../firebase.js";
import firebase from "firebase";
export default {
  name: "Chat",
  data() {
    return {
      input: "",
      roomName: "",
      messages: "",
      roomNameTest: "",
      firebaseData: null,
    };
  },
  methods: {
    checkIfSender(message) {
      return this.$store.state.userData.name === message.name;
    },
    testData() {
      console.log(this.messages);
    },
    previewData() {
      return this.firebaseData;
    },
    sendMessage() {
      db.collection("rooms")
        .doc(this.$route.params.id)
        .collection("messages")
        .add({
          message: this.input,
          name: this.$store.state.userData.name,
          time: firebase.firestore.FieldValue.serverTimestamp(),
        });
      this.input = "";
    },
    getRoomName() {
      db.collection("rooms")
        .doc(this.$route.params.id)
        .onSnapshot((snapshot) => (this.firebaseData = snapshot.data()));
    },
    getMessages() {
      db.collection("rooms")
        .doc(this.$route.params.id)
        .collection("messages")
        .orderBy("time", "asc")
        .onSnapshot(
          (snapshot) => (this.messages = snapshot.docs.map((doc) => doc.data()))
        );
    },
  },
  watch: {
    $route(to, from) {
      this.getRoomName();
      this.getMessages();
    },
  },
  created() {
    this.getRoomName();
    this.getMessages();
  },
};
</script>

<style>
.sendButton {
  cursor: pointer;
  background-color: inherit;
  border: none;
}
.iconInput {
  font-size: 24px;
  padding: 0 10px;
}
.iconChatFooter {
  font-size: 24px;
  padding-left: 20px;
}
.iconLastHeader {
  padding-right: 20px;
  font-size: 24px;
  padding-left: 20px;
}
.last__icon {
  display: flex;
  align-items: center;
}
.footer__icons {
  display: flex;
  align-items: center;
}
.chat__footer form {
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 20px;
}
form > .form__input {
  flex: 1;
  border-radius: 20px;
  display: flex;
  align-items: center;
  border: none;
  background-color: #f5f5f5;
  width: 100%;
  font-size: 16px;
  height: 29px;
  padding: 0 10px;
}
.chat__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 8vh;
}
.chat__sender {
  margin-left: auto;
}
.chat__receiver {
  margin-right: auto;
}
.chat__message {
  background-color: #f5f5f5;
  padding: 6px;
  max-width: 50%;
  border-radius: 10px;
  width: fit-content;
  margin-bottom: 20px;
}
.chat__body {
  overflow: scroll;
  padding: 30px;
  flex: 1;
  overflow-x: hidden;
}
.chat__headerInfo {
  padding-left: 10px;
}
.iconChatHeader {
  padding-left: 20px;
  font-size: 20px;
}
.chat__headerSideIcons {
  display: flex;
  align-items: center;
}
.roomName {
  font-size: 15px;
  font-weight: bold;
}
.lastOnline {
  font-size: 12px;
  color: grey;
}
.chat__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 2px solid #f5f5f5;
  min-height: 5vh;
}
.iconInfoWrapper {
  display: flex;
  align-items: center;
}
.chat {
  flex: 0.7;
  display: flex;
  flex-direction: column;
}
</style>