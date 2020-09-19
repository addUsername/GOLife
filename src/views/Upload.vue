<template>
  <v-app id="inspire">
      <v-card>
          <v-toolbar flat color="secundary" dark> </v-toolbar>
        <v-row align="center" >
            <v-card flat class="mx-auto col-10">
                <v-card-title>Draw area</v-card-title>
                <v-card-subtitle>This will be initial state</v-card-subtitle>
            </v-card>
        </v-row>
        <v-row>
            <v-card flat class="mx-auto col-10">
                <canvas  id="canvasDraw" v-bind:width="(window_width / 2)" v-bind:height=" (window_height / 2)">
                Sorry, this demo requires a web browser which supports HTML5 canvas!
              </canvas>
            </v-card>
        </v-row>
      </v-card>
  </v-app>
</template>

<script>
export default {
     data: () => ({
        grid: [],
        big: 40,
        rect: ""
     }),
    computed:{
        window_width(){
            return window.innerWidth;
        },
        window_height(){
            return window.innerHeight;
        },
        SIZE(){
        return localStorage.getItem("SIZE");
        }
    },
    methods:{
        init(){
            var canvas = document.getElementById("canvasDraw");
            this.rect = canvas.getBoundingClientRect();
            console.log(this.rect);
            var ctx = canvas.getContext("2d");
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.fillStyle = "green";
            var i;
            for (i=0; i <= this.SIZE*this.big; i += this.big) {
                ctx.moveTo(0,i);
                ctx.lineTo(this.SIZE*this.big,i);
                ctx.stroke();
            }
            for (i=0; i <= this.SIZE*this.big; i += this.big) {
            //ctx.lineWidth(3);
                ctx.moveTo(i,0);
                ctx.lineTo(i,this.SIZE*this.big);
                ctx.stroke();
            }
            canvas.addEventListener('click',this.write,false);
        },
        write(evt){
            alert(Math.floor((evt.clientX - this.rect.left)/this.big) + ',' + Math.floor((evt.clientY- this.rect.top)/this.big));
            //alert((evt.clientX%this.big) + ',' + evt.clientY%this.big);
        }
    },
    mounted(){
        this.init();
    }
}
</script>

<style>

</style>