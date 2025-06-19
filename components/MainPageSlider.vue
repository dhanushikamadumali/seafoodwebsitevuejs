<template>

<!-- Main page slider -->

    <div class="mx-auto mt-16" elevation="8" max-width="1000">
        <v-slide-group v-model="model" class="pa-4" show-arrows>
            <v-slide-group-item v-for="(item, index)  in products" :key="index" v-slot="{ isSelected, toggle }">
                <v-card :color="isSelected ? 'primary' : 'white-lighten-1'" class="image-card ma-4" 
                    @click="selectCategoryId(item.id)">
                    <div class="d-flex align-start justify-center">
                        <v-img class="img" cover="fill" :src="item.img"></v-img>
                    </div>
                    <div class="d-flex justify-center pt-6">
                        <span class="text-h5">{{ item.title }}</span>
                    </div>
                    <div class="d-flex justify-center pt-1">
                        <span class="text-subtitle-2">{{ item.subtitle }}</span>
                    </div>
                </v-card>
            </v-slide-group-item>
        </v-slide-group>
    </div>

</template>
<script>
import cuttlefishImage from '@/assets/images/PageSlider/cuttlefish.png';
import PrawnsImage from '@/assets/images/PageSlider/prawns.png';
import TunaImage from '@/assets/images/PageSlider/tuna.png';
import Kumbala from '@/assets/images/PageSlider/kumbala.png';
import Crab from '@/assets/images/PageSlider/crab.png';
import CategoryApi from "@/Api/Modules/categories.js";
export default {
    data: () => ({
        model: null,
        products: [
            {
                id:1,
                img: PrawnsImage,
                title: "Prawns",
                subtitle: "3 Products",
            },
            {
                id:2,
                img: TunaImage,
                title: "Tuna",
                subtitle: "3 Products",
            },
            {
                id:3,
                img: Crab,
                title: "Crab",
                subtitle: "3 Products",
            },
            {
                id:4,
                img: Kumbala,
                title: "Kumbala",
                subtitle: "3 Products",
            },
            {
                id:5,
                img: cuttlefishImage,
                title: "Cuttlefish",
                subtitle: "3 Products",
            },
            {
                id:6,
                img: PrawnsImage,
                title: "Prawns",
                subtitle: "3 Products",
            },
            {
                id:7,
                img: TunaImage,
                title: "Tuna",
                subtitle: "3 Products",
            },
            {
                id:8,
                img: Crab,
                title: "Crab",
                subtitle: "3 Products",
            },
            {
                id:9,
                img: Kumbala,
                title: "Kumbala",
                subtitle: "3 Products",
            },
            {
                id:10,
                img: cuttlefishImage,
                title: "Cuttlefish",
                subtitle: "3 Products",
            },

        ],
        items:"",
        searchdata: "",
        
       
    }),
  
 
   
}
</script>