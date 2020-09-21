<template>
    <v-app id="inspire">
        <v-card>
            <v-toolbar dense flat color="secundary" dark>
                <a id="downloadAnchorElem" style="display:none"></a>
                <v-snackbar color="success" v-model="snackBar">
                    {{ message }}
                </v-snackbar>
            </v-toolbar>
            <v-tabs>
                <v-tab> <v-icon left>mdi-resize</v-icon>Shape </v-tab>
                <v-tab> <v-icon left>mdi-ruler</v-icon> Rules </v-tab>
                <v-tab> <v-icon left>mdi-format-color-fill</v-icon> Colors </v-tab>
                <v-tab> <v-icon left>mdi-cloud-download</v-icon>  <v-icon left>mdi-cloud-upload-outline</v-icon></v-tab>
            <v-tab-item>
            <v-row align="center" >
                <v-card flat class="mx-auto col-10">
                    
                    <v-card-title>Settings</v-card-title>
                    <v-row fluid no-gutters>
                        <v-col lg="5" sm="12">
                        <v-card>
                            <v-card-title>Shape</v-card-title>
                            <v-col cols="5">
                                <v-col cols="12">
                                    <v-subheader class="pl-0">Grid size (Affects performance)</v-subheader>
                                    <v-slider
                                    color="green"
                                    :thumb-size="size"
                                    v-model="size"
                                    thumb-label="always"
                                    min="1"
                                    ></v-slider>
                                </v-col>
                            </v-col>
                            <v-col  cols="5">
                                    <v-checkbox color="green" v-model="checkbox3d">
                                        <template v-slot:label>
                                            <v-card flat>
                                                <p color="white">Make it 3D</p>
                                            </v-card>
                                        </template>
                                    </v-checkbox>
                                    <v-subheader class="pl-0">Height (Affects performance)</v-subheader>
                                    <v-slider
                                    :disabled="!checkbox3d"
                                    v-model="height"
                                    min="1"
                                    max="50"
                                    color="green"
                                    thumb-size="24"
                                    thumb-label="always"
                                    ></v-slider>
                            </v-col>
                        </v-card>
                        </v-col>
                        <v-col lg="5" sm="12">
                            <v-card>
                                <v-card-title>Camera</v-card-title>
                                 <v-col cols="5">
                                <v-card-subtitle>Focal length</v-card-subtitle>
                                    <v-text-field
                                    type="number"
                                    label="0-5"
                                    prepend-icon="mdi-lock"
                                    :rules="['Required']"
                                    color="green"
                                    v-model="focalLen"
                                ></v-text-field>
                            </v-col>
                            </v-card>
                            <v-card>
                                <v-col cols="5">
                                    <v-subheader class="pl-0">FPS (Affects performance)</v-subheader>
                                    <v-slider
                                    v-model="fps"
                                    color="green"
                                    thumb-size="24"
                                    min="1"
                                    max="60"
                                    thumb-label="always"
                                    ></v-slider>
                                </v-col>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </v-row>
            </v-tab-item>
            <v-tab-item>
            <v-row align="center" >
                <v-card flat class="mx-auto col-10">
                    <v-card-title>Settings</v-card-title>
                    <v-row fluid no-gutters>
                        <v-col lg="4" sm="12">
                        <v-card>
                            <v-card-title>Rules</v-card-title>
                            <v-col cols="5">
                                <v-card-subtitle>Neighbours threshold  </v-card-subtitle>
                                    <v-subheader class="pl-0">Min</v-subheader>
                                    <v-slider
                                    v-model="minNei"
                                    thumb-size="24"
                                    color="pink"
                                    min="1"
                                    max="8"
                                    thumb-label="always"
                                    ></v-slider>
                                    <v-subheader class="pl-0">Max</v-subheader>
                                    <v-slider
                                    v-model="maxNei"
                                    thumb-size="24"
                                    color="pink"
                                    min="1"
                                    max="8"
                                    thumb-label="always"
                                    ></v-slider>
                            </v-col>
                            <v-col  cols="5">                                
                                    <v-subheader class="pl-0">Magic number</v-subheader>
                                    <v-slider
                                    v-model="magicNei"
                                    color="pink"
                                    thumb-size="24"
                                    min="1"
                                    max="8"
                                    thumb-label="always"
                                    ></v-slider>
                                <v-subheader class="pl-0">Apply garbage rule</v-subheader>
                                <v-checkbox color="pink" v-model="garbage">
                                        <template >
                                            <v-card flat>
                                                <p>{{(garbage)? 'Applied': ''}}</p>
                                            </v-card>
                                        </template>
                                    </v-checkbox>
                            </v-col>
                        </v-card>
                        </v-col>
                        <v-col lg="7" sm="12">
                            <v-card>
                                <v-card-title>Definition</v-card-title>
                                 <v-col cols="5">
                                <v-card-subtitle>Dead rule</v-card-subtitle>
                                <v-card-text>
                                    Any live cell with <span class="font-weight-black">two</span> or <span class="font-weight-black"> three</span> live neighbours survives.
                                </v-card-text>
                            </v-col>
                            </v-card>
                            <v-card>
                                <v-col cols="5">
                                <v-card-subtitle>Reborn rule</v-card-subtitle>
                                    <v-card-text>
                                        Any dead cell with <span class="font-weight-black">three</span> live neighbours becomes a live cell.
                                    </v-card-text>
                                </v-col>
                            </v-card>
                            <v-card>
                                <v-col cols="5">
                                <v-card-subtitle>Garbage rule</v-card-subtitle>
                                    <v-card-text>
                                        All other live cells die in the next generation. Similarly, all other dead cells stay dead.
                                    </v-card-text>
                                </v-col>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </v-row>
            </v-tab-item>
            <v-tab-item>
            <v-row align="center" >
                <v-col md=4 sm=12>
                <v-card flat class="col-6">
                    <v-card-actions>
                        <v-btn :color="colorBackground" outlined @click.prevent="setBackground">Background</v-btn>
                        <v-btn :color="colorCube" outlined @click.prevent="setColorCube">Cube</v-btn>
                        <v-btn :color="colorVanish" outlined @click.prevent="setVanish">Vanish</v-btn>
                    </v-card-actions>
                    <v-color-picker mode="rgba" v-model="colorChoosed" class="ma-2" show-swatches swatches-max-height="300px"></v-color-picker>

                </v-card>
                </v-col>
                <v-col md=7 sm=12>
                <v-card flat class="col-6">
                    <GridCanvas /> 
                </v-card>
                </v-col>
            </v-row>
            </v-tab-item>
            <v-tab-item>
                <v-row align="center" >
                    <v-col md=4 sm=12>
                        <v-card flat class="col-6">
                            <v-card-subtitle>Manage your custom settings</v-card-subtitle>
                             <v-btn color="white" big outlined @click.prevent="exportJson"><v-icon left>mdi-cloud-download-outline</v-icon>Download</v-btn>
                            
                        </v-card>
                    </v-col>
                    <v-col md=7 sm=12>
                    <v-card flat class="col-6" align="center">
                        <v-file-input
                            place-holder="import"
                            v-model="jsonFile"
                            acept="application/json"
                            dense
                            outlined
                            />
                        <v-textarea
                            readonly
                            background-color="secundary"
                            filled
                            loading
                            v-model="jsonText"
                        /> 
                    </v-card>
                    </v-col>
                </v-row>
            </v-tab-item>
        </v-tabs>
        </v-card>
    </v-app>
</template>

<script>
import GridCanvas from "@/components/GridCanvas"
import { mapGetters } from "vuex";

export default {
    components:{GridCanvas},
    data: () => ({
        size: 5,
        checkbox3d: false,
        height:0,
        focalLen:"1.5",
        fps:1,
        minNei:2,
        maxNei:3,
        magicNei:3,
        garbage:true,
        swatches: [
        ['#FF0000', '#AA0000', '#550000'],
        ['#FFFF00', '#AAAA00', '#555500'],
        ['#00FF00', '#00AA00', '#005500'],
        ['#00FFFF', '#00AAAA', '#005555'],
        ['#0000FF', '#0000AA', '#000055'],
      ],
      snackBar: false,
      message: "",
      colorChoosed: "",
      colorBackground:"2f302f",
      colorCube:"#332cb0",
      colorVanish:"white",
      isColored: false,   //or_vanished = 
      jsonFile: "",
      jsonText:""

    }),
    computed:{
        
        combined(){
            return {size: this.size, checkbox3d: this.checkbox3d, height:this.height, focalLen:this.focalLen, fps:this.fps,
                    minNei: this.minNei, maxNei: this.maxNei, magicNei: this.magicNei, garbage: this.garbage, colorBackground: this.colorBackground,
                    colorCube: this.colorCube, isColored: this.isColored, jsonFile: this.jsonFile}
        },
        ...mapGetters({
            shapeStore: "shape",
            colorsStore: "colors",
            rulesStore: "rules"
        }),

    },
    watch: {
        combined: function () {
            //SHAPE
            if(this.jsonFile.size > 1){
                this.importJson();
                return
            }
            const shape={
                size:this.size,
                height:this.height,
                focal_length:this.focalLen,
                fps:this.fps
            };
            const rules={
                minnei:this.minNei,
                maxnei:this.maxNei,
                magicnei:this.magicNei,
                garbage: this.garbage
            }
            const hexRgb = require('hex-rgb');
            const back = hexRgb(this.colorBackground);
            const cubecolor = hexRgb(this.colorCube);
            const color={
                colorBackground: {
                    red: (back.red/255).toFixed(2),
                    green: (back.green/255).toFixed(2),
                    blue: (back.blue/255).toFixed(2),
                    alpha: back.alpha
                }, 
                colorCube: {
                    red: (cubecolor.red/255).toFixed(2),
                    green:(cubecolor.green/255).toFixed(2),
                    blue: (cubecolor.blue/255).toFixed(2),
                    alpha: back.alpha
                }, 
                isColored: this.isColored
            }
            
           this.$store.dispatch("setShape",shape);
           this.$store.dispatch("setRules",rules);
           this.$store.dispatch("setColor",color);


        }
    },
    methods: {
        setBackground(){
            this.colorBackground = this.colorChoosed;
        },
        setColorCube(){
            this.colorCube = this.colorChoosed;
            this.isColored = true;
            this.colorVanish = "white";

        },
        setVanish(){
            this.colorCube = "white";
            this.isColored = false;
            this.colorVanish = "green";
        },
        importJson(){
            const blob = new Blob([this.jsonFile], {type:"application/json"});
            const fr = new FileReader();
            //xq es async.. .then()?
            fr.addEventListener("load", e => {

            console.log(e.target.result, JSON.parse(fr.result));            
            const inputObject = JSON.parse(fr.result);                
            this.$store.dispatch("setShape",inputObject.shape);
            this.$store.dispatch("setRules",inputObject.rules);
            this.$store.dispatch("setColor",inputObject.color);
            this.$store.dispatch("setColors",inputObject.colors);
            this.message = ":)";
            this.snackBar = true;
            this.jsonText = JSON.stringify(fr.result);
            });

            fr.readAsText(blob);

        },
        exportJson(){
            const currentdate = new Date();
            const myObj = {
                shape: this.$store.getters["shape"],
                colors: this.$store.getters["colors"],
                rules: this.$store.getters["rules"],
                color: this.$store.getters["color"],
                about:{
                    autor:"github.com/addUsername",
                    demo:"addusername.github.io/GOLife/",
                    date: + currentdate.getDate() + "/"
                        + (currentdate.getMonth()+1)  + "/" 
                        + currentdate.getFullYear() + " @"  
                        + currentdate.getHours() + ":"  
                        + currentdate.getMinutes() + ":" 
                        + currentdate.getSeconds()
                        } 

            }
            var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(myObj));
            var dlAnchorElem = document.getElementById('downloadAnchorElem');
            dlAnchorElem.setAttribute("href",     dataStr     );
            dlAnchorElem.setAttribute("download", "GOLife.json");
            dlAnchorElem.click();
                    }
    }
}
</script>

<style>

</style>