<template>
  <v-app>
    <v-navigation-drawer
        expand-on-hover
        mini-variant
        right
        app
        dark
      >
        <v-list>
          <v-list-item 
          class="px-4"> 

            <v-list-item-content>
               <v-list-item-avatar link to="https://www.github.com/addusername">
                <v-img  max-width="65" src="https://api.iconify.design/mdi:github.svg"></v-img>                  
              </v-list-item-avatar>
              <v-list-item-subtitle>addUsername</v-list-item-subtitle>   
            </v-list-item-content>
          </v-list-item>
        </v-list>
          <v-divider></v-divider>
          <v-list nav dense>
            
          <v-switch
        color="secondary"
        v-model="$vuetify.theme.dark"
        primary
        label="Dark"
      ></v-switch>
        <v-list-item
          color="secondary"
          link
          to="/upload"
        >
          <v-list-item-icon>
            <v-icon>mdi-upload</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Say something!</v-list-item-title>
        </v-list-item>
        <v-list-item
          color="secondary"
          link
          to="/"
        >
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item
          color="secondary"
          link
          to="/settings"
        >
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
         <v-list-item
          color="secondary"
          @click.prevent="toSettings"
          link
          to="/about"
        >
          <v-list-item-icon>
            <v-icon>mdi-contacs</v-icon>
          </v-list-item-icon>
          <v-list-item-title>about</v-list-item-title>
        </v-list-item>


        </v-list>
      </v-navigation-drawer>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
  mounted(){
  }
};
</script>
