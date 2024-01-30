<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="handleSumit">
            <input type="email" placeholder="Ingrese email" v-model.trim="email">
            <input type="password" placeholder="Ingrese constraseña" v-model.trim="password">
            <button type="submit" :disabled="userStore.loadingUser">Crear Usuario</button>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import {useUserStore} from '../stores/user'
// import { useRouter } from 'vue-router';

const userStore = useUserStore()
// const router = useRouter()

const email = ref('blueweb@test.com')
const password = ref('123123')

const handleSumit = async() =>{
    if(!email.value || password.value.length < 6){
        return alert("Llena los campos")
    }
    await userStore.registerUser(email.value, password.value)
    // router.push('/')
}
</script>