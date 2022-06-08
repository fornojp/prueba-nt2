<template>
  <section class="src-components-tabla">
    <!-- Tabla -->
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Nota</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(data, index) in this.dataTabla2"
          :key="index"
          class="table-dark"
        >
          <td class="table-dark">{{ data.nombre }}</td>
          <td class="table-dark">{{ data.apellido }}</td>
          <td :style="getEstilo(data.nota)" class="table-dark">
            {{ data.nota }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="col">Promedio</th>
          <th scope="col"></th>
          <th :style="getEstilo(getPromedio())" scope="col">
            {{ getPromedio() }}
          </th>
        </tr>
      </tfoot>
    </table>
  </section>
</template>

<script>
export default {
  name: "src-components-tabla",
  props: ["data"],
  mounted() {},
  data() {
    return { dataTabla2: this.data };
  },
  methods: {
    getEstilo(nota) {
      return {
        color: nota <= 3 ? "red" : nota < 6 ? "yellow" : "blue",
      };
    },
    getPromedio() {
      let cant = this.dataTabla2.length;
      let promedio = 0;
      this.dataTabla2.map((usuario) => {
        promedio += Number(usuario.nota);
      });
      promedio = promedio / cant;
      if (cant == 0) {
        promedio = 0;
      }

      return promedio;
    },
  },
  computed: {},
};
</script>

<style scoped lang="css"></style>
