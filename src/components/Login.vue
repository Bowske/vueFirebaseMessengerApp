.<template>
  <div id="login">
    <div class="login__container">
      <img src="../../public/messengerLoginIcon.png" alt />
      <h1 class="messenger__header">Messenger</h1>
      <div class="messenger__paragraphs">
        <p>Błyskawicznie kontaktuj się z ważnymi dla Ciebie osobami.</p>
        <p>Zaloguj się do serwisu Facebook, aby rozpocząć.</p>
      </div>
      <form>
        <input type="text" />
        <input type="text" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
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
.login__container {
  text-align: center;
}
</style>