<template>
<div>
    <h2>Get all users</h2>
    <h4>จํานวนผู้ใช้งาน {{users.length}}</h4>
    <p><button v-on:click="navigateTo('/user/create')">สร้างผู้ใช้งาน</button></p>
    <p><button v-on:click="logout">Logout</button></p>
    <div v-for="user in users" v-bind:key="user.id">
        <p>id: {{ user.id }}</p>
        <p>ชื่อ-นามสกุล: {{ user.name }} - {{ user.lastname }}</p>
        <p>email: {{ user.email }}</p>
        <p>password: {{ user.password }}</p>
        <p><button v-on:click="navigateTo('/user/'+ user.id)">ดูข้อมูลผู้ใช้</button>
            <button v-on:click="navigateTo('/user/edit/'+ user.id)">แกไ้ขขอ้ มูล
            </button>
            <button v-on:click="deleteUser(user)">ลบข้อมูล</button>
        </p>
    </div>
</div>
</template>

<script>
import UsersService from '@/services/UsersService'
export default {
    data() {
        return {
            users: []
        }
    },
    async created() {
        this.users = (await UsersService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteUser(user) {
            let result = confirm("Want to delete?")
            if (result) {
                try {
                    await UsersService.delete(user)
                } catch (err) {
                    console.log(err)
                }
            }
        },
        logout() {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({
                name: 'login'
            })
        },
    }
}
</script>

<style scoped>
</style>
