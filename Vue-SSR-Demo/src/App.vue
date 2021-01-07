<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title + ' - 拼好课'" />
  </div>
</template>

<style>
body, #app {
  margin: 0; 
}
</style>
