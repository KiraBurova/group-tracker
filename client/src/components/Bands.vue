<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
        <panel title="Bands">
            <router-link
                slot="action"
                to="bands/add">
                <v-btn
                    class="red lighten-1"
                    dark
                    medium
                    fab
                    absolute
                    right
                    middle>
                    <v-icon>add</v-icon>
                </v-btn>
            </router-link>
            <div
                class="band"
                v-for="band in bands"
                :key="band.id">
                <v-layout>
                    <v-flex>
                        <div class="band-name">{{band.name}}</div>
                        <img :src="band.imageUrl" :alt="band.name" class="band-image">
                        <div>
                            <router-link
                                :to="`/bands/${band.id}`"
                                tag="v-btn"
                                class="btn brown lighten-3 theme--dark">
                                View
                            </router-link>
                        </div>
                    </v-flex>
                </v-layout>
            </div>
        </panel>
    </v-flex>
</v-layout>
</template>

<script>
import Panel from '@/components/Panel';
import BandsService from '../services/BandsService';

export default {
    components: {
        Panel
    },
    data () {
        return {
            bands: []
        };
    },
    async mounted () {
        this.bands = (await BandsService.index()).data;
    }
};
</script>

<style scoped>
.band {
    padding: 20px;
    height: auto;
    overflow: hidden;
}
.band-name {
    font-size: 30px;
}
.band-description {
    font-size: 24px;
}
.band-image {
    width: 70%;
    margin: 0 auto;
}
.band-link {
    display: block;
}
</style>
