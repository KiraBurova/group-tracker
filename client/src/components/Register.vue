<template>
<v-layout>
    <v-flex xs6 offset-xs3>
        <panel title="Register">
                <form
                    name="group-tracker-form"
                    autocomplete="off">
                    <v-text-field
                        label="E-mail"
                        type="email"
                        v-model="userData.email"
                    ></v-text-field>
                    <v-text-field
                        label="Пароль"
                        type="password"
                        v-model="userData.password"
                        autocomplete="new-password"
                    ></v-text-field>
                </form>
                <div class="error" v-html="error"></div>
                <br>
                <v-btn
                    dark
                    class="brown lighten-3"
                    @click="register">
                    Register
                </v-btn>
        </panel>
    </v-flex>
</v-layout>
</template>

<script>
import AuthinticationService from '@/services/AuthinticationService';
import Panel from '@/components/Panel';

export default {
    name: 'Register',
    components: {
        Panel
    },
    data () {
        return {
            userData: {
                email: '',
                password: ''
            },
            error: null
        };
    },
    methods: {
        async register () {
            try {
                const response = await AuthinticationService.register({
                    email: this.userData.email,
                    password: this.userData.password
                });
                console.log(response);
            } catch (e) {
                this.error = e.response.data.error;
            }
        }
    }
};
</script>

<style scoped>
.error {
    color: red;
}
</style>
