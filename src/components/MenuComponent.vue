<template>
  <Menu mode="horizontal" :theme="theme1" active-name="1">
    <MenuItem name="1">
      <router-link to="/">
        <div class="link">
          <Icon type="ios-paper"></Icon>
          Home
        </div>
      </router-link>
    </MenuItem>
    <MenuItem name="2">
      <router-link to="/first">
        <div class="link">
          <Icon type="ios-people"></Icon>
          First
        </div>
      </router-link>
    </MenuItem>
    <MenuItem name="3">

      <router-link to="/user/KonCheng">
        <div class="link">
          <Icon type="settings"></Icon>
          User
        </div>
      </router-link>

    </MenuItem>
    <MenuItem name="4">
      <router-link to="/rank">
        <div class="link">
          <Icon type="settings"></Icon>
          Rank
        </div>
      </router-link>
    </MenuItem>
    <MenuItem name="5">
      <router-link to="/book">
        <div class="link">
          <Icon type="settings"></Icon>
          Book
        </div>
      </router-link>
    </MenuItem>
  </Menu>
</template>

<script>
  export default {
    name: "MenuComponent",
    data() {
      return {
        theme1: 'light'
      }
    }
  }
</script>

<style scoped>
  .link {
    height: 100%;
    width: 100%;
  }
</style>
