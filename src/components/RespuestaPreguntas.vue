<template>
  <section class="src-components-respuesta-preguntas">
    <div class="jumbotron">
      <h2>Respuestas Preguntas</h2>
      <hr />
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Pregunta</th>
            <th scope="col">Respuesta</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(respuesta, index) in this.respuestas" :key="index">
            <td>{{ respuesta.Pregunta }}</td>
            <td>{{ respuesta.Respuesta }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-respuesta-preguntas",
  props: [],
  mounted() {},
  data() {
    return {
      respuestas: [
        { Pregunta: 1, Respuesta: ["C"] },
        { Pregunta: 2, Respuesta: ["C"] },
        { Pregunta: 3, Respuesta: ["B"] },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
hr {
  background-color: black;
  height: 2px;
}
</style>
