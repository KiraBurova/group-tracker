<template>
  <div>
    <input type="email" name="email" placeholder="email" v-model="userData.email">
    <input type="password" name="password" placeholder="password" v-model="userData.password">
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthinticationService from '@/services/AuthinticationService';

export default {
    name: 'HelloWorld',
    data () {
        return {
            userData: {
                email: '',
                password: 'dddd'
            }
        };
    },
    methods: {
        async register () {
            const response = await AuthinticationService.register({
                email: this.userData.email,
                password: this.userData.password
            });
            console.log(response.data);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
