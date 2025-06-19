<template>
    <div>
        <!--Start of icons with content   -->
        <v-row class>

            <v-col lg="4" md="4" cols="12">

                <div class="icon-image">
                    <v-img src="~/assets/images/section6/Frame 799.png" width="80px" height="80px"></v-img>
                </div>

                <div class="title-content pt-5">
                    Premium Packaging, Reliable Delivery

                    <div class="content pt-4">
                        Ensuring your seafood arrives in perfect
                        condition with top-tier packaging and swift,
                        reliable transport.
                    </div>
                </div>
            </v-col>


            <v-col lg="4" md="4" cols="12">

                <div class="icon-image">
                    <v-img src="~/assets/images/section6/Frame 800.png" width="80px" height="80px"></v-img>
                </div>

                <div class="title-content pt-5">
                    Seamless Logistics, Fresh Every Time

                    <div class="content pt-4">
                        Our efficient logistics network guarantees that your fresh seafood reaches you on time,
                        every time.
                    </div>
                </div>
            </v-col>

            <v-col lg="4" md="4" cols="12">
                <div class="icon-image">
                    <v-img src="~/assets/images/section6/Frame 801.png" width="80px" height="80px"></v-img>

                </div>

                <div class="title-content pt-5">
                    Uncompromising Quality Control

                    <div class="content pt-4">
                        From sourcing to delivery, we maintain strict
                        quality checks to ensure the highest standard
                        of seafood for our customers.
                    </div>
                </div>
            </v-col>

        </v-row>

        <!--End of icons with content   -->

        <!--Start of Reviews Slider  -->
        <div class="web_header">
            <v-row>

                <div class="carousel">
                    <div class="carousel-title">
                        Words From Happy Customers
                    </div>

                    <v-carousel v-model="model" hide-delimiters height="340px">

                        <!-- Previous Button -->
                        <template v-slot:prev>
                            <v-btn icon color="#F5951F" @click="prevSlide">
                                <v-icon color="#FFFFFF">mdi-chevron-left</v-icon>
                            </v-btn>
                        </template>

                        <!-- Next Button -->
                        <template v-slot:next>
                            <v-btn icon color="#F5951F" @click="nextSlide">
                                <v-icon color="#FFFFFF">mdi-chevron-right</v-icon>
                            </v-btn>
                        </template>

                        <v-carousel-item v-for="(item, i) in items" :key="i" :value="i">
                            <v-sheet :color="color" height="100%" tile>
                                <div class="d-flex flex-column fill-height justify-center align-center">
                                    <!-- comment Section -->
                                    <div class="text-comment mb-4">
                                        {{ item.comment }}
                                    </div>
                                    <!-- Image Section -->
                                    <div class="carousel-img ">
                                        <v-img :src="item.src" alt="Customer Img" />
                                    </div>
                                </div>
                            </v-sheet>
                        </v-carousel-item>
                    </v-carousel>

                </div>
            </v-row>
        </div>


        <div class="mobile_header">
            <v-row>

                <div class="carousel mt-16">
                    <div class="carousel-title">
                        Words From Happy Customers
                    </div>
                    <v-carousel v-model="model" hide-delimiters height=280px>

                        <!-- Previous Button -->
                        <template v-slot:prev>
                            <v-btn icon color="#F5951F" @click="prevSlide">
                                <v-icon color="#FFFFFF">mdi-chevron-left</v-icon>
                            </v-btn>
                        </template>

                        <!-- Next Button -->
                        <template v-slot:next>
                            <v-btn icon color="#F5951F" @click="nextSlide">
                                <v-icon color="#FFFFFF">mdi-chevron-right</v-icon>
                            </v-btn>
                        </template>

                        <v-carousel-item v-for="(item, i) in items" :key="i" :value="i">
                            <v-sheet :color="color" height="100%" tile>
                                <div class="d-flex flex-column fill-height justify-center align-center">

                                    <!-- Comment Section -->
                                    <div class="text-comment mb-4">
                                        {{ item.comment }}
                                    </div>

                                    <!-- Image Section -->
                                    <div class="carousel-img ">
                                        <v-img :src="item.src" alt="Customer Img" />
                                    </div>
                                </div>
                            </v-sheet>
                        </v-carousel-item>
                    </v-carousel>
                </div>
            </v-row>
        </div>
        <!--End of Reviews Slider  -->

    </div>
</template>


<script>
import customerImage from '~/assets/images/carousel/customer.png';
export default {
    data() {
        return {
            color: '#FFFFFF',
            model: 0,
            items: [
                {
                    name: 'John Smith',
                    comment: '‘’ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse massa libero, mattis volutpat id. Egestas adipiscing placerat eleifend a nascetur. Mattis proin enim, nam porttitor vitae. Faucibus vel porttitor imperdiet ultricies a eget sed. Vestibulum velit vulputate amet nunc amet. ’’',
                    src: customerImage,
                },
                {
                    name: 'John Smith',
                    comment: '‘’ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse massa libero, mattis volutpat id. Egestas adipiscing placerat eleifend a nascetur. Mattis proin enim, nam porttitor vitae. Faucibus vel porttitor imperdiet ultricies a eget sed. Vestibulum velit vulputate amet nunc amet. ’’',
                    src: customerImage,
                },
                {
                    name: 'John Smith',
                    comment: '‘’ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse massa libero, mattis volutpat id. Egestas adipiscing placerat eleifend a nascetur. Mattis proin enim, nam porttitor vitae. Faucibus vel porttitor imperdiet ultricies a eget sed. Vestibulum velit vulputate amet nunc amet. ’’',
                    src: customerImage,
                },
                {
                    name: 'John Smith',
                    comment: '‘’ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse massa libero, mattis volutpat id. Egestas adipiscing placerat eleifend a nascetur. Mattis proin enim, nam porttitor vitae. Faucibus vel porttitor imperdiet ultricies a eget sed. Vestibulum velit vulputate amet nunc amet. ’’',
                    src: customerImage,
                },
            ],

        }
    },

    computed: {
        totalSlides() {
            return this.items.length;
        },
    },

    methods: {
        nextSlide() {

            this.model = (this.model + 1) % this.totalSlides;
        },
        prevSlide() {

            this.model = (this.model - 1 + this.totalSlides) % this.totalSlides;
        },
    },


}
</script>