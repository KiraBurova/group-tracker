<template>
<v-layout>
    <v-flex xs6 offset-xs3>
            <panel title="Login">
                <v-text-field
                    label="E-mail"
                    type="email"
                    v-model="userData.email"
                ></v-text-field>
                 <v-text-field
                    label="Пароль"
                    type="password"
                    v-model="userData.password"
                ></v-text-field>
                <div class="error" v-html="error"></div>
                <br>
                <v-btn
                    dark
                    class="brown lighten-3"
                    @click="login">
                    Log In
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
        async login () {
            try {
                const response = await AuthinticationService.login({
                    email: this.userData.email,
                    password: this.userData.password
                });
                this.$store.dispatch('setToken', response.data.token);
                console.log(response.data.user);
                this.$store.dispatch('setUser', response.data.user);
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
