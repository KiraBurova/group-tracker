<template>
<v-layout>
  <v-flex xs6>
    <panel title="Band Metadata">
      <h1>{{band.name}}</h1>
      <img :src="band.imageUrl" :alt="band.name" class="band-image">
      <p class="band-description">{{band.description}}</p>
      <a :href="band.youtubeChannel">Youtube</a>
    </panel>
  </v-flex>
  <v-flex xs6>

  </v-flex>
</v-layout>
</template>

<script>
import BandsService from '@/services/BandsService';
import Panel from '@/components/Panel';

export default {
    components: {
        Panel
    },
    data () {
        return {
            band: {}
        };
    },
    async mounted () {
        const bandId = this.$store.state.route.params.bandId;
        this.band = (await BandsService.show(bandId)).data;
    }
};
</script>

<style>
.band {
    padding: 20px;
    height: auto;
    overflow: hidden;
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
