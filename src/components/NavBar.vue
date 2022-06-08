<template>
  <section class="src-components-nav-bar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/">
        <a class="navbar-brand" href="">Navbar</a>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/formularioNota">
            <a class="nav-link" href="#">Formulario Notas</a>
          </router-link>
          <router-link to="/respuestaPreguntas">
            <a class="nav-link" href="#">Respuesta Preguntas</a>
          </router-link>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: "src-components-nav-bar",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css"></style>
