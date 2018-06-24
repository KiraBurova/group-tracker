<template>
<v-layout>
  <v-flex xs6>
    <panel title="About a band">
      <h1>{{band.name}}</h1>
      <img :src="band.imageUrl" :alt="band.name" class="band-image">
      <p class="band-description">{{band.description}}</p>
      <router-link
        :to="`/bands/${band.id}/edit`"
        tag="v-btn"
        class="btn brown lighten-3 theme--dark">
        Редактировать группу
       </router-link>
    </panel>
  </v-flex>
  <v-flex xs6>
      <panel title="YouTube Latest Video">
            <youtube
                :video-id="videoId"
                :player-width="480"
                :player-height="300"
                ></youtube>
            <a :href="band.youtubeChannel">Youtube</a>
    </panel>
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
            band: {},
            videoId: null
        };
    },
    async mounted () {
        const bandId = this.$store.state.route.params.bandId;
        this.band = (await BandsService.show(bandId)).data;
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${this.band.youtubeChannel}&maxResults=1&order=date&type=video&key=`);
        try {
            const latestVideo = await response.json();
            this.videoId = await latestVideo.items[0].id.videoId;
        } catch (e) {
            throw new Error(e);
        }
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
.flex {
    padding-right: 20px;
}
.flex:last-of-type {
    padding-right: 0;
}
</style>
