import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const hexRgb = require('hex-rgb');
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
          colorBackground: {
              red: (hexRgb("2f302f").red/255).toFixed(2),
              green: (hexRgb("2f302f").green/255).toFixed(2),
              blue: (hexRgb("2f302f").blue/255).toFixed(2),
              alpha: 1
          }, 
          colorCube: {
              red: (hexRgb("#f2f5f0").red/255).toFixed(2),
              green: (hexRgb("#f2f5f0").green/255).toFixed(2),
              blue: (hexRgb("#f2f5f0").blue/255).toFixed(2),
              alpha: 0.4
          }, 
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