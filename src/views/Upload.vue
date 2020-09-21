<template>
  <v-app id="inspire">
      <v-card>
      <v-toolbar flat color="secundary" dense dark>
          <v-toolbar-title>Comments section <v-icon>mdi-comment-multiple</v-icon></v-toolbar-title>
            </v-toolbar>
        <v-row>
            <v-col lg="4" sm="1"><v-card><v-card-text>
                          <v-card-title>How to use</v-card-title>
                          <p>In order to post a comment you should create an <a target="_blank" href="https://guides.github.com/features/issues/">issue</a> on this 
                          <a target="_blank" href="https://github.com/addUsername/GOLife"> repo</a>, magic comes after
                          </p>
                          <p>If text from issue == "No" then the issue will be ignored</p>
                          <p>Text are sanitized, not tested</p>
                          <p>This is github, be responsable</p>
                          </v-card-text>
                          </v-card></v-col>

            <v-col lg="3" sm="1"
                class="ma-0 pa-0"
                fluid
                v-for="(comment, index) in comments"
                :key="index"
            >
                <v-card
            class="mx-auto"
            max-width="400"
            >
            <v-card-title>
                <v-icon
                large
                left
                >
                mdi-github
                </v-icon>
                <span class="title font-weight-light">{{ comment.title }}</span>
            </v-card-title>
        
            <v-card-text class="headline font-weight-bold">
                {{ comment.text }}
            </v-card-text>
        
            <v-card-actions>
                <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                    <v-img
                    class="elevation-6"
                    alt=""
                    :src="comment.avatar_url"
                    ></v-img>
                </v-list-item-avatar>
        
                <v-list-item-content>
                    <v-list-item-title>{{ comment.username }}</v-list-item-title>
                </v-list-item-content>  
                </v-list-item>
            </v-card-actions>
            </v-card>
            </v-col>
        </v-row>
      </v-card>
  </v-app>
</template>

<script>
import axios from "axios";
    
export default {

    data: () =>({
            snackBar: false,
            message: "",
            comments:[],
            GitResponse:"",
        }),
    computed:{
        issues(){
            return "issues";
        }
    },
    methods:{
        getIssues(){
                return axios
            .get("https://api.github.com/repos/addusername/golife/issues")
            .then(response => {
                this.GitResponse = response.data;
                this.parseResponse();
                return;
            })
            .catch(error => {
                throw new Error(`API ${error}`);
            });
        },
        parseResponse(){
            //sanitze
            var sanitizeHtml = require('sanitize-html');
            //Check this
            for(var i = 0; i<this.GitResponse.length; i++){
                this.GitResponse[i]
                if(sanitizeHtml(this.GitResponse[i].body) !== "No"){
                    const post = {
                    username: this.GitResponse[i].user.login, 
                    text: sanitizeHtml(this.GitResponse[i].body),
                    date: this.GitResponse[i].updated_at,
                    avatar_url: this.GitResponse[i].user.avatar_url,
                    title: this.GitResponse[i].title}
                    
                    this.comments.push(post);
                }
                
            }
        }
        
    },
    mounted(){
            this.getIssues();
        }
}
</script>

<style>

</style>