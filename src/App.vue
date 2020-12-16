<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="@/assets/logo.png" />
    <div id="nav">
      <router-link to="/">Text Editor</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap");

html {
  font-size: 62.5%; // 1rem == 1rem
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: "Aleo", serif;
  font-size: 1.6rem;
  color: #2c3e50;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  * {
    box-sizing: border-box;
  }
}

button {
  color: #42b983;
  font-size: 1.6rem;
  padding: 0.8rem;
  background-color: #2c3e50;
  cursor: pointer;
  transition: all 250ms;
  border: none;
  &:hover {
    background-color: #42b983;
    color: #2c3e50;
    text-shadow: rgba(0, 0, 0, 0.2) 0.2rem 0.2rem 0;
    box-shadow: 0 0 0.8rem 0 #2c3e50;
  }
  &:focus,
  &:active {
    outline: none;
    box-shadow: 0 0 0.8rem 0 #2c3e50;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  min-width: 43rem;
  min-block-size: 60rem;
}

#nav {
  padding: 3rem;

  a {
    font-weight: bold;
    color: #2c3e50;
    &:hover {
      color: #42b983;
      text-shadow: rgba(0, 0, 0, 0.2) 0.2rem 0.2rem 0;
    }
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.logo {
  max-width: 5rem;

  padding-top: 2rem;
}
</style>
