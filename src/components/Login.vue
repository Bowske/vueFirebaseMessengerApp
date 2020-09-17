.<template>
  <div id="login">
    <div class="login__container">
      <img class="messenger__img" src="../../public/messengerLoginIcon.png" alt />
      <p class="messenger__header">Messenger</p>
      <div class="messenger__paragraphs">
        <p>Błyskawicznie kontaktuj się z ważnymi dla Ciebie osobami.</p>
        <p>Zaloguj się do serwisu Facebook, aby rozpocząć.</p>
      </div>
      <form class="login__input">
        <input type="text" placeholder="Adres e-mail lub numer telefonu" />
        <input placeholder="Haslo" type="text" />
      </form>
      <button class="messenger__buttons">Kontynuuj</button>
      <div class="google__login">
        <button @click="signIn" class="messenger__buttons">
          Zaloguj przez
          <span style="color: #4285f4">G</span>
          <span style="color: #ea4335">o</span>
          <span style="color: #fbbc05">o</span>
          <span style="color: #4285f4">g</span>
          <span style="color: #34a853">l</span>
          <span style="color: #ea4335">e</span>
        </button>
      </div>
      <!-- <button @click="testData()">TESTESTESTSER</button> -->
    </div>
  </div>
</template>

<script>
import { auth, provider } from "../firebase.js";
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {
    testData() {
      console.log(this.$store.state.userData);
    },
    signIn() {
      auth
        .signInWithPopup(provider)
        .then((result) =>
          this.$store.commit("setUserData", {
            email: result.additionalUserInfo.profile.email,
            picture: result.additionalUserInfo.profile.picture,
            name: result.additionalUserInfo.profile.name,
          })
        )
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style>
#login {
  height: 90vh;
  width: 90vw;
  display: grid;
  place-items: center;
}
.messenger__paragraphs p {
  margin: 0 0 24px;
}
.messenger__header {
  font-size: 40px;
  margin: 0 0 24px;
}
.messenger__img {
  width: 65px;
  height: 65px;
}
.login__input {
  max-width: 65%;
  display: flex;
  flex-direction: column;
  margin: auto;
}
.login__input input {
  margin: 0 0 12px;
  font-size: 16px;
  height: 33px;
  padding: 0 16px;
}
.login__container {
  text-align: center;
}
.messenger__buttons {
  background: none;
  color: inherit;
  border: 1px solid #f5f5f5;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  margin: 24px 0 0;
  font-size: 19px;
  color: #0084ff;
}
</style>