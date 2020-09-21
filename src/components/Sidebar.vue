<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <div class="sidebar__headerLeft">
        <div class="avatarPadding">
          <img class="profilePic" :src="this.$store.state.userData.picture" alt="profilePic" srcset />
        </div>
        <h1 class="sidebar__headerName">Czaty</h1>
      </div>
      <div class="sidebar__headerRight">
        <CircledIcon iconStr="cog" />
        <CircledIcon iconStr="video" />
        <CircledIcon iconStr="sticky-note" />
      </div>
    </div>
    <div class="sidebar__search">
      <font-awesome-icon class="searchIcon" icon="search" />
      <input
        v-model="searchInput"
        class="sidebar__searchInput"
        type="text"
        placeholder="Szukaj w Messengerze"
      />
    </div>
    <div class="sidebar__chats" v-if="firebaseData">
      <!--  -->
      <SidebarChats :addNewChat="true" />
      <router-link
        class="router__link"
        v-for="room in filteredList"
        :key="room.id"
        :to="{ name: 'Pokoje', params: { id: room.id }}"
      >
        <SidebarChats
          :lastMessage="room.data.lastMessage"
          :key="room.id"
          :id="room.id"
          :name="room.data.name"
          :icon="room.data.ikona"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "../firebase.js";
import CircledIcon from "./CircledIcon";
import SidebarChats from "./SidebarChats";

export default {
  name: "Sidebar",
  components: {
    CircledIcon,
    SidebarChats,
  },
  data() {
    return {
      firebaseData: null,
      searchInput: "",
    };
  },
  methods: {},
  created() {
    return {
      firebaseData: db.collection("rooms").onSnapshot((snapshot) => {
        this.firebaseData = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
      }),
    };
  },
  computed: {
    filteredList() {
      return this.firebaseData.filter((room) => {
        return room.data.name
          .toLowerCase()
          .includes(this.searchInput.toLowerCase());
      });
    },
  },
};
</script>

<style>
.router__link {
  text-decoration: none;
  color: inherit;
}
.avatarPadding {
  display: flex;
  align-items: center;
}
.profilePic {
  height: 35px;
  width: 35px;
  border-radius: 50%;
}
.searchIcon {
  padding-left: 10px;
}
.sidebar__searchInput {
  border: none;
  background-color: inherit;
  width: 100%;
  padding-left: 10px;
  font-size: 12px;
}
.sidebar__search {
  display: flex;
  align-items: center;
  height: 40px;
  margin: 16px;
  background-color: #f5f5f5;
  border-radius: 15px;
}
.avatarPadding {
  padding-right: 8px;
}
.fa-user-circle {
  color: #d2d5da;
}
.sidebar {
  flex: 0.3;
  overflow: scroll;
  overflow-x: hidden;
}
.sidebar__header {
  margin-top: 3px;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  min-height: 5vh;
}
.sidebar__headerName {
  font-size: 23px;
}
.sidebar__headerLeft {
  margin-left: 10px;
  display: flex;
  align-items: center;
  min-width: 10vw;
}
.sidebar__headerRight {
  display: flex;
  min-width: 10vw;
  align-items: center;
  justify-content: center;
  /* justify-content: space-between; */
}
</style>