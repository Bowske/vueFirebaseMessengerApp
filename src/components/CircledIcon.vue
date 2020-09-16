<template>
  <font-awesome-layers class="layer">
    <font-awesome-icon class="circleAnimation" icon="circle" />
    <font-awesome-icon class="iconAnimation" :icon="iconStr" transform="shrink-8" />
  </font-awesome-layers>
</template>

<script>
export default {
  name: "CircledIcon",
  props: {
    iconStr: String
  },
  data() {
    return {};
  },
  methods: {
    // animateClick(color) {
    //   document.getElementById("circleAnimation").style.backgroundColor = color;
    // }
  }
};
</script>

<style>
.iconAnimation:hover {
  color: hotpink;
  cursor: pointer;
}
.layer {
  padding-left: 12px;
  font-size: 36px;
}
.fa-circle {
  color: #f5f5f5;
}
</style>