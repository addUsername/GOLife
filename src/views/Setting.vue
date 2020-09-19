<template>
    <v-app id="inspire">
        <v-card>
            <v-toolbar flat color="secundary" dark> </v-toolbar>
            <v-tabs>
                <v-tab> <v-icon left>mdi-resize</v-icon>Shape </v-tab>
                <v-tab> <v-icon left>mdi-ruler</v-icon> Rules </v-tab>
                <v-tab> <v-icon left>mdi-format-color-fill</v-icon> Colors </v-tab>
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
                                <v-card-subtitle>Height (Affects performance)</v-card-subtitle>
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
                                        <template v-slot:label>
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
            <v-row align="center" justify="center">
                <v-card flat class="col-6">
                </v-card>
            </v-row>
            </v-tab-item>
        </v-tabs>
        </v-card>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        size: 10,
        checkbox3d: false,
        height:1,
        focalLen:"1.5",
        fps:1,
        minNei:2,
        maxNei:3,
        magicNei:3,
        garbage:true
    }),
    computed:{
        combined(){
            return {size: this.size, checkbox3d: this.checkbox3d, height:this.height, focalLen:this.focalLen, fps:this.fps,
                    minNei: this.minNei, maxNei: this.maxNei, magicNei: this.magicNei, garbage: this.garbage}
        }
    },
    watch: {
        combined: function () {
            //SHAPE
            localStorage.setItem('SIZE', this.size)
            if (this.checkbox3d){
                localStorage.setItem('HEIGHT', this.height);
            }else{
                localStorage.setItem('HEIGHT', 1);
            }
            localStorage.setItem('FOCAL_LENGTH', this.focalLen);
            localStorage.setItem('FPS', this.fps);
            //RULES
            localStorage.setItem('MINNEI', this.minNei);
            localStorage.setItem('MAXNEI', this.maxNei);
            localStorage.setItem('MAGICNEI', this.magicNei);
            localStorage.setItem('GARBAGE', this.garbage);
            //COLORS
            console.log(this.combined);
            
        }
    }
}
</script>

<style>

</style>