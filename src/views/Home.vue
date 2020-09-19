<template>
  <div class="home">
    <v-container dark fluid class="pa-5">
      <v-row no-gutters >
        <v-col lg="3" sm="12">
          <v-card flat class="mx-auto">
              <v-card-title> Conway's Game Of Life!</v-card-title>
              <v-card-subtitle><v-icon><mdi-arrow-right></mdi-arrow-right></v-icon> Settings</v-card-subtitle>
              
                <v-col>
                  <v-btn color="black"  @click.native="init"><v-icon>mdi-arm-flex</v-icon>Load</v-btn>
                  <v-btn color="grey" outlined @click.native="stop"><v-icon>mdi-pause</v-icon>Pause</v-btn>
                  <v-btn color="green" outlined @click.native="start"><v-icon>mdi-play</v-icon>Start</v-btn>
                  <v-btn @click.native="background"><v-icon>mdi-theme-light-dark</v-icon></v-btn>
                </v-col>
            </v-card>
        </v-col>
        <v-col lg="5" sm="12">
              <v-card flat>
                <v-card-title> View controls</v-card-title>
                <v-card-text>
                  <v-row >
                  <v-col sm="4">
                    <p>Rotate camera | 
                    <v-icon>mdi-cursor-default</v-icon><v-icon>mdi-plus</v-icon><v-icon>mdi-axis</v-icon></p>
                  </v-col>
                  <v-col sm="4">
                    <p>Move camera | 
                    Ctrl<v-icon>mdi-plus</v-icon>Rotate</p>
                  </v-col>
                  <v-col sm="4">
                  <p>Zoom | 
                    Shift<v-icon>mdi-plus</v-icon>Move</p>
                  </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
        </v-col>
         <v-col lg="4" sm="12">
           <v-card flat>              
              <v-card-text>
                <v-row>
                <v-col lg="3" class="pa-0 ma-0">
                  <v-card-subtitle>Apply rules</v-card-subtitle>
                  <dl>
                    <dt>Min:{{MINNEI}} | Max:{{MAXNEI}}</dt>
                    <dt>Revive: {{MAGICNEI}}</dt>
                    <dt>Garbage: {{GARBAGE}}</dt>
                  </dl>
                </v-col>
                <v-col lg="2"  class="pa-0 ma-0">
                  <v-card-subtitle>Shape</v-card-subtitle>
                  <dl>
                    <dt>Size: {{SIZE}} </dt>
                    <dt>Height: {{HEIGHT}}</dt>                    
                  </dl>
                </v-col>
                <v-col lg="4"  class="pa-0 ma-0">
                  <v-card-subtitle>Camera</v-card-subtitle>
                  <dl>
                    <dt>Focal: {{FOCAL_LENGTH}} </dt>
                    <dt>Fps: {{FPS}}</dt>
                    <dt>Width: {{Math.round(window_width / 1.05)}} | Height: {{Math.round(window_height / 1.3)}}</dt>
                  </dl>
                </v-col>
                </v-row>
              </v-card-text>
           </v-card>
         </v-col>
          
      </v-row>
      <v-row>
            <v-col sm="11">
              <v-card>
                <div >
              <canvas  id="canvas" v-bind:width="(window_width / 1.05)" v-bind:height=" (window_height / 1.3)">
                Sorry, this demo requires a web browser which supports HTML5 canvas!
              </canvas>
              </div>
              </v-card>
            </v-col>        
      </v-row>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  name: 'Home',
  components: {
  },
  data: () => ({
    OPACITY:0.5,
    renderer: "",
    cubes: [],
    cubesAlive:[],
    num_cubes:"",
    ticker: "",
    //para color de fondo
    cur_white: true,
    //por si quiere cambiar el tamaño¿?
    window_width: window.innerWidth,
    window_height: window.innerHeight,
    isLoaded: true

  }),
  computed:{
    SIZE(){
      return localStorage.getItem("SIZE");
    },
    FPS(){
      return localStorage.getItem("FPS");
    },
    FOCAL_LENGTH(){
      return localStorage.getItem("FOCAL_LENGTH");
    },
    HEIGHT(){
      return localStorage.getItem("HEIGHT");
    },
    MINNEI(){
      return localStorage.getItem("MINNEI");
    },
    MAXNEI(){
      return localStorage.getItem("MAXNEI");
    },
    MAGICNEI(){
      return localStorage.getItem("MAGICNEI");
    },
    GARBAGE(){
      return localStorage.getItem("GARBAGE");
    }
  },
  methods:{
    init(){     
      this.isLoaded=true
      console.log("init()!!");
      //apply_rules will affect this array
      this.cubes=[];
      var opacity;  
      var cubesAliveJ = [];
      var cubesAliveK = [];
      var cubesAliveI = [];
      //initialize (first draw)
      for (var i = 0; i < this.SIZE; ++i) {
          cubesAliveJ = [];
        for (var j = 0; j < this.HEIGHT; ++j) {
          cubesAliveK = [];
          for (var k = 0; k < this.SIZE; ++k) {
              if (Math.random() < 0.5){
                  cubesAliveK.push(1);
                  opacity = this.OPACITY;
              }else{
                  cubesAliveK.push(0);
                  opacity = 0;
              }
              var cube = Pre3d.ShapeUtils.makeCube(0.5);
              var transform = new Pre3d.Transform();
              transform.translate(i - 5, j - 5, k - 5);
              this.cubes.push({
                shape: cube,
                color: new Pre3d.RGBA(i / 10, j / 10, k / 10,opacity),
                trans: transform});
          }
          cubesAliveJ.push(cubesAliveK); 
        }
        cubesAliveI.push(cubesAliveJ);
      }
      this.cubesAlive=cubesAliveI;
      this.num_cubes =  this.cubes.length;
      this.draw();
      this.ticker.start();
    },
    draw(){
      console.log("drrawing!!!");
      for (var i = 0; i < this.num_cubes; ++i) {
        //ok es sencillisimo, si hay que dibuar el cubo estas lineas se tienen que ejecutar
        //ojo eh, que esto lee array no una matriz
        var cube = this.cubes[i];
        this.renderer.fill_rgba = cube.color;
        this.renderer.transform = cube.trans;
        this.renderer.bufferShape(cube.shape);        
      }  
      if (this.cur_white) {
        this.renderer.ctx.setFillColor(1, 1, 1, 1);
      } else {
        this.renderer.ctx.setFillColor(0, 0, 0, 1);
      }
      this.renderer.drawBackground();  
      this.renderer.drawBuffer();
      this.renderer.emptyBuffer();
    },
    spin_and_draw() {
        //para que un cubo no se vea simplemente cambiaremos su color por 
        //opacidad 0
        this.nextIteration();
        this.draw();
    },
    nextIteration(){
        var opacity = 0;
        this.cubes=[];

        var cubesAliveJ = [];
        var cubesAliveK = [];
        var cubesAliveI = [];
        for (var i = 0; i < this.SIZE; ++i) {
            cubesAliveJ = [];
          for (var j = 0; j < this.HEIGHT; ++j) {
            cubesAliveK = []
            for (var k = 0; k < this.SIZE; ++k) {
                if (this.applyRules(i,k,j)){
                    cubesAliveK.push(1);
                    opacity = this.OPACITY;
                }else{
                    cubesAliveK.push(0);
                    opacity = 0;
                }
                var cube = Pre3d.ShapeUtils.makeCube(0.5);
                var transform = new Pre3d.Transform();
                transform.translate(i - 5, j - 5, k - 5);
                this.cubes.push({
                  shape: cube,
                  color: new Pre3d.RGBA(i / 10, j / 10, k / 10,opacity),
                  trans: transform});
              
            }
            cubesAliveJ.push(cubesAliveK);                 
          }
          cubesAliveI.push(cubesAliveJ);
        }
        this.cubesAlive=cubesAliveI;
    },
    applyRules(i,k,j){   
      //j is h 
        if( i == 0 || i == this.SIZE-1 ){
            return false;
        }
        if( k == 0 || k == this.SIZE-1){
            return false;
        }
        var sum = this.getSum_Neighboors(i,k,j);
        //NEI rules
        if(sum>this.MAXNEI || sum<this.MINNEI){
            return false;        
        }
        if (this.cubesAlive[i][j][k] == 1 ){
        return true
        }
        //revive, ok esto es a partir de que numero un muerto sobrevive
        //obv entre MAXNEI Y MINNEI
        if (!this.cubesAlive[i][j][k]){
            if (sum > this.MAGICNEI-1){
            return true
            }
        }   
        return !this.GARBAGE;
    },
    getSum_Neighboors(i,k,h){
        
        var sum = 0
        sum += this.cubesAlive[i-1][h][k-1]+this.cubesAlive[i-1][h][k]+this.cubesAlive[i-1][h][k+1];
        sum += this.cubesAlive[i][h][k-1]+this.cubesAlive[i][h][k+1];
        sum += this.cubesAlive[i+1][h][k-1]+this.cubesAlive[i+1][h][k]+this.cubesAlive[i+1][h][k+1];
        return sum;
    },
    stop(){
      this.ticker.stop();
    },
    start(){
      this.ticker.start();
    },
    background(){
      this.cur_white = (this.cur_white)? false : true;
    }

  },
  mounted(){
    console.log("mounted()!!")  
    var screen_canvas = document.getElementById('canvas');
    this.renderer = new Pre3d.Renderer(screen_canvas);
    this.renderer.camera.focal_length = this.FOCAL_LENGTH;
    DemoUtils.autoCamera(this.renderer, 0, 0, -30, 0.40, -1.06, 0, this.draw);
    this.ticker = new DemoUtils.Ticker(this.FPS, this.spin_and_draw);
  }
}
</script>