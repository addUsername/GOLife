import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
      state:{
        shape:{
            size:5,
            height:1,
            focal_length:2,
            fps:1
        },
        rules:{
            minnei:2,
            maxnei:3,
            magicnei:3,
            garbage: true
        },
        colors:{
            alternativeIni: false,
            uploadGrid: []
        },
        color:{
            colorBackground: "",
            colorCube: "",
            isColored: false
        }
      },
      mutations:{
        SAVE_SHAPE(state, shape) {
            state.shape = shape;
            console.log("saving shape");
          },
        SAVE_COLORS(state, colors) {
        state.colors = colors;
        console.log("saving colors");
        },
        SAVE_RULES(state, rules) {
            state.rules = rules;
            console.log("saving rules");
        },
        SAVE_COLOR(state, color) {
            state.color = color;
            console.log("saving color");
        }
      },
      getters:{
        shape: state => state.shape,
        colors: state => state.colors,
        rules: state => state.rules,
        color: state => state.color
      },
      actions:{
        setShape({ commit }, shape) {
            commit("SAVE_SHAPE", shape);
          },
        setColors({ commit }, colors) {
        commit("SAVE_COLORS", colors);
        },
        setRules({ commit }, rules) {
            commit("SAVE_RULES", rules);
        },
        setColor({ commit }, color) {
            commit("SAVE_COLOR", color);
        }
      }
});