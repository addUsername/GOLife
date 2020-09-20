import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  
    theme: {
      dark: true,
        themes: {
          light: {
            primary: "#90caf9",
            secondary: "#ffecb3",
            background: "#eeeeee" // Added variable
          },
          dark: {
            primary: "#62768B",
            secondary: "#cbba83",
            background: "#bcbcbc" // If using base color, be use to mark as such to get HEX value
          }
        }
      }
});
