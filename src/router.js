import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import FormularioNota from "./components/FormularioNota.vue";
import RespuestaPreguntas from "./components/RespuestaPreguntas.vue";

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/formularioNota", component: FormularioNota },
    { path: "/respuestaPreguntas", component: RespuestaPreguntas },
    { path: "/", redirect: "formularioNota" },
  ],
});
