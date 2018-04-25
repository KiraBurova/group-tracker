<template>
<div>
    <panel title="Band Metadate">
        <v-text-field
            label="Name"
            required
            :rules="[required]"
            v-model="band.name">
        </v-text-field>
        <v-text-field
            label="Description"
            required
            :rules="[required]"
            multi-line
            v-model="band.description">
        </v-text-field>
        <v-text-field
            label="Image Of A Band"
            required
            :rules="[required]"
            v-model="band.imageUrl">
        </v-text-field>
        <v-text-field
            label="Youtube Channel"
            required
            :rules="[required]"
            v-model="band.youtubeChannel">
        </v-text-field>
        <div class="danger-alert" v-if="error">{{error}}</div>
        <v-btn
         dark
         class="brown lighten-3"
         @click="add">
            Add a band
        </v-btn>
    </panel>
</div>
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
            band: {
                name: null,
                description: null,
                imageUrl: null,
                youtubeChannel: null
            },
            required: (value) => !!value || 'Required',
            error: null
        };
    },
    methods: {
        async add () {
            this.error = null;
            const areAllFieldsAreFilledIn = Object.keys(this.band).every(key => !!this.band[key]);
            if (!areAllFieldsAreFilledIn) {
                this.error = 'Please fill in all the required fileds';
                return;
            }

            try {
                await BandsService.post(this.band);
                this.$router.push({
                    name: 'bands'
                });
            } catch (err) {
                console.log(err);
            }
        }
    }
};
</script>

<style scoped>
</style>
