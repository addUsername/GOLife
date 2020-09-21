<template>
    <v-row>
        <v-col sm="12">
                <v-card flat>
                    <v-card-subtitle>This will be initial state</v-card-subtitle>
                    <v-card-text>
                        <canvas  id="canvasDraw" v-bind:width="(this.SIZE * this.big)" v-bind:height="(this.SIZE * this.big)">
                        Sorry, this demo requires a web browser which supports HTML5 canvas!
                        </canvas>
                    </v-card-text>
                </v-card>
        </v-col>
        <v-col sm="6">        
                <v-card>
                    <v-card-subtitle>Select floor</v-card-subtitle>
                    <v-card-text>
                        <v-slider
                            color="pink"
                            :thumb-size="24"
                            v-model="h"
                            thumb-label="always"
                            min="0"
                            :max="HEIGHT-1"
                            ></v-slider>
                    </v-card-text>
                    <v-card-actions><v-btn color ="pink" @click.prevent="uploadGrid" outlined>Done!</v-btn>
                        <v-btn color="green" outlined  @click.prevent="init"> load</v-btn> 
                        <v-btn color="blue" outlined  @click.prevent="clear"> clear</v-btn></v-card-actions>
                </v-card>
        </v-col>
        <v-col col sm="4">
            <p>Floors updated:</p>
        </v-col>

    </v-row>
</template>

<script>
export default {
     data: () => ({
        grid: [],
        big: 40,
        rect: "",
        h: 0,
        modifiedFloor:[],
        ctx:"",
        posUpdated:""
     }),
    computed:{
        window_width(){
            return window.innerWidth;
        },
        gridHtml(){
            return this.grid;
        },
        window_height(){
            return window.innerHeight;
        },
        SIZE(){
            return this.$store.getters["shape"].size;
        },
        HEIGHT(){
            return this.$store.getters["shape"].height;
        }
    },
    watch: {
        h: function () {
            //this.init();
            console.log("implementar clear")
        }
        },
    methods:{
        init(){
            
            this.grid = []
            for(var x = 0; x < this.HEIGHT; x++){
                this.grid[x] = [];    
                for(var y = 0; y < this.SIZE; y++){ 
                    this.grid[x][y] = [];                
                    for(var j = 0; j < this.SIZE; j++){ 
                     this.grid[x][y][j] = 0;    
                    }
                }
            }
            console.log("this.grid 0s")
            console.log(this.grid);
            
            var canvas = document.getElementById("canvasDraw");
            this.rect = canvas.getBoundingClientRect();
            this.ctx = canvas.getContext("2d");
            this.ctx.fillStyle = "white";
            this.ctx.fill();
            
            for (var i=0; i <= this.SIZE*this.big; i += this.big) {
            this.ctx.moveTo(0,i);
            this.ctx.lineTo(this.SIZE*this.big,i);
            this.ctx.stroke();
            }
            for (i=0; i <= this.SIZE*this.big; i += this.big) {
            //ctx.lineWidth(3);
                this.ctx.moveTo(i,0);
                this.ctx.lineTo(i,this.SIZE*this.big);
                this.ctx.stroke();
            }
            canvas.addEventListener('click',this.write,false);
        },
        write(evt){
            var x = Math.floor((evt.clientX - this.rect.left)/this.big);
            var y =  Math.floor((evt.clientY- this.rect.top)/this.big);

            if(this.grid[this.h][x][y] == 0){
                 this.grid[this.h][x][y] = 1
            }else{
                 this.grid[this.h][x][y] = 0;
            }
            
            this.ctx.beginPath();
            this.ctx.rect((x*this.big), (y*this.big), this.big, this.big);            
            this.ctx.fillStyle = (this.grid[this.h][x][y] == 1)? "white": "black" ;
            this.ctx.fill();
            console.log(this.grid);
        },
        uploadGrid(){
            
            const colors = {
                alternativeIni: true,
                uploadGrid: this.grid
            }            
           this.$store.dispatch("setColors",colors);
        }
    },
    mounted(){
        //this.init();
    }
}
</script>

<style>

</style>