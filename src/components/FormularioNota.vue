<template>
  <section class="src-components-formulario-nota">
    <div class="jumbotron">
      <vue-form :state="formState" @submit.prevent="enviar()">
        <!-- Campo nombre -->
        <validate tag="div">
          <!-- elemento de entrada -->
          <label for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            class="form-control"
            v-model.trim="formData.nombre"
            autocomplete="off"
            required
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            no-espacios
          />

          <!-- Mensajes de validacion -->
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere entre {{ nombreMinLength }} y
              {{ nombreMaxLength }} caracteres
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permite espacios intermedios en este campo
            </div>
          </field-messages>
        </validate>

        <!-- Campo Apellido -->
        <validate tag="div" class="my-4">
          <!-- elemento de entrada -->
          <label for="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            class="form-control"
            v-model.trim="formData.apellido"
            autocomplete="off"
            required
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            no-espacios
          />

          <!-- Mensajes de validacion -->
          <field-messages name="apellido" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere entre {{ nombreMinLength }} y
              {{ nombreMaxLength }} caracteres
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permite espacios intermedios en este campo
            </div>
          </field-messages>
        </validate>

        <!-- Campo nota -->
        <validate tag="div" class="my-4">
          <!-- elemento de entrada -->
          <label for="nota">Nota</label>
          <input
            type="number"
            id="nota"
            name="nota"
            class="form-control"
            v-model.trim="formData.nota"
            autocomplete="off"
            required
            :min="notaMin"
            :max="notaMax"
          />

          <!-- Mensajes de validacion nota -->
          <field-messages name="nota" show="$dirty">
            <div slot="required" class="alert alert-danger mt-2">
              Campo requerido
            </div>
            <div slot="min" class="alert alert-danger mt-2">
              La Nota minima permitida es de {{ notaMin }}
            </div>
            <div slot="max" class="alert alert-danger mt-2">
              La Nota minima permitida es de {{ notaMax }}
            </div>
          </field-messages>
        </validate>

        <button
          type="submit"
          class="btn btn-success my-4"
          :disabled="formState.$invalid"
        >
          Enviar
        </button>
      </vue-form>
      <Tabla :data="dataTabla"></Tabla>
    </div>
  </section>
</template>

<script>
import Tabla from "./Tabla.vue";
export default {
  name: "src-components-formulario-nota",
  props: [],
  components: { Tabla },
  mounted() {},
  data() {
    return {
      formData: this.getInicialData(),
      formState: {},
      nombreMinLength: 3,
      nombreMaxLength: 15,
      notaMax: 10,
      notaMin: 0,
      dataTabla: [],
      promedio: 0,
    };
  },
  methods: {
    getInicialData() {
      return {
        nombre: "",
        apellido: "",
        nota: "",
      };
    },
    enviar() {
      this.dataTabla.push(this.formData);
      this.formData = this.getInicialData();
      this.formState._reset();
    },
  },
  computed: {},
};
</script>

<style scoped lang="css"></style>
