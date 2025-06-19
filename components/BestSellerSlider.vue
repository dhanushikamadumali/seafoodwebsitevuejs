<template>

<!-- Best sell items slider -->

    <div class="mx-auto mt-16 best_seller" elevation="8" max-width="1000">
        <v-slide-group v-model="model" class="pa-4" show-arrows>
            <v-slide-group-item v-for="(item, index)  in products" :key="index" v-slot="{ isSelected, toggle }">
                <v-card :color="isSelected ? 'primary' : 'white-lighten-1'" class="imagecard ma-6" 
                    @click="toggle">
                    <div class="d-flex align-start justify-center">
                        <v-img class="productimg" cover="fill" :src="item.img"></v-img>
                    </div>

                   <div class="productcard-btn"> 
                     <v-btn density="compact" icon="mdi-plus"></v-btn>
                    </div>
                   
                    
                    <div class="d-flex justify-left pt-6">
                        <span class="text-h6 productcard-title">{{ item.title }}</span>
                    </div>
                    <div class="d-flex justify-left pt-1">
                        <span class="productcard-subtitle">{{ item.subtitle }}</span>
                    </div>
                    <div class="d-flex justify-left pt-1">
                        <span class="text-h6 productcard-price">Rs.{{ item.price }}</span>
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
import YellowfinImage from '@/assets/images/PageSlider/yellowfin.png';

export default {
    data: () => ({
        model: null,


        products: [
            {
                img: TunaImage,
                title: "Tuna/Kelawala",
                subtitle: "Minimum Weight 500g",
                price: "2490.00",
            },
            {
                img: PrawnsImage,
                title: "Prawns",
                subtitle: "Minimum Weight 500g",
                price: "2490.00",
            },
            {
                img: cuttlefishImage,
                title: "Cuttlefish",
                subtitle: "Minimum Weight 500g",
                price: "2490.00",
            },

            {
                img: YellowfinImage,
                title: "Yellowfin Tuna (Kelawala)",
                subtitle: "Minimum Weight 500g",
                price: "2490.00",
            },
            
            {
                img: TunaImage,
                title: "Tuna/Kelawala",
                subtitle: "Minimum Weight 500g",
                price: "2490.00",
            },
            {
                img: PrawnsImage,
                title: "Prawns",
                subtitle: "Minimum Weight 500g",
                price: "2490.00",
            },
            {
                img: cuttlefishImage,
                title: "Cuttlefish",
                subtitle: "Minimum Weight 500g",
                price: "2490.00",
            },

            {
                img: YellowfinImage,
                title: "Yellowfin Tuna (Kelawala)",
                subtitle: "Minimum Weight 500g",
                price: "2490.00",
            },
            
           

        ],
    }),
}
</script>