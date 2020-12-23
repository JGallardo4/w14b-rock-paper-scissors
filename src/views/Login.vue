<template>
  <div id="login">
    <form action="" id="login__form">
      <fieldset id="login__fieldset">
        <legend>Login</legend>

        <p id="username-input">
          <label for="username">Username</label>
          <input type="text" name="username" v-model="input.username" />
        </p>

        <p id="password-input">
          <label for="password">Password</label>
          <input type="password" name="password" v-model="input.password" />
        </p>

        <button @click="login()" id="submit-login">Submit</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$axios
        .post("https://reqres.in/api/login", {
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        })
        .then((response) => {
          if (response.status == 200) {
            console.log("success");
          } else {
            console.log("invalid login");
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
$tablet-min: 769px;
$desktop-min: 1024px;
$widescreen-min: 1216px;
$fullhd-min: 1216px;

@mixin mobile-layout {
}

@mixin desktop-layout {
  width: 40vw;
  input {
    place-self: stretch;
  }
}

@media screen and (min-width: $desktop-min) {
  #login__form {
    @include desktop-layout;
  }
}

@mixin formReset() {
  input {
    font-size: 16px;
    font-size: calc(max(16px, 1em));
    font-family: inherit;
    padding: 0.25em 0.5em;
    background-color: #fff;
    border: 1px solid black;
    border-radius: 5px;
    width: 100%;

    &:not(textarea) {
      line-height: 1;
      height: 2.25rem;
    }
  }
}

@mixin resetButton() {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

@include formReset;

#login {
  display: grid;
  place-items: center;
  min-height: 100vh;
  background: url("https://source.unsplash.com/random");
  background-size: cover;
  #login__form {
    padding: 0.5rem;
    border-radius: 10px;
    background-color: white;

    #login__fieldset {
      padding: 1rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 1rem;
      border-radius: 10px;
      border-style: solid;
      border-width: 1px;
      border-color: black;

      fieldset {
        border: 0;
        display: grid;
      }

      legend {
        padding: 0 0.5rem;
      }

      input {
        padding: 1rem;
      }

      #username-input {
        grid-row: 1;
      }

      #password-input {
        grid-row: 2;
      }

      #submit-login {
        grid-row: 3;
        @include resetButton;
        border: 1px solid black;
        background-color: black;
        color: white;
        font-weight: bold;
        border-radius: 10px;
        place-self: center;
        padding: 1rem 1.5rem;
        &:hover {
          background-color: white;
          color: black;
        }
      }
    }
  }
}
</style>
