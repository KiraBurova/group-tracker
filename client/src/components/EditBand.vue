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
         @click="save">
            Сохранить группу
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
    async mounted () {
        try {
            const bandId = this.$store.state.route.params.bandId;
            this.band = (await BandsService.show(bandId)).data;
        } catch (e) {
            console.log(e);
        }
    },
    methods: {
        async save () {
            this.error = null;
            const areAllFieldsAreFilledIn = Object.keys(this.band).every(key => !!this.band[key]);
            if (!areAllFieldsAreFilledIn) {
                this.error = 'Please fill in all the required fileds';
                return;
            }
            try {
                const bandId = this.$store.state.route.params.bandId;
                await BandsService.put(this.band);
                this.$router.push({
                    name: 'band',
                    params: {
                        bandId: bandId
                    }
                });
            } catch (e) {
                console.log(e);
            }
        }
    }
};
</script>

<style scoped>
</style>
