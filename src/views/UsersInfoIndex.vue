<template>
    <div>
        <h1>usersInfoIndex</h1>
        <div>
            <button @click="userInfoReg">ユーザ情報の登録</button>
        </div>
        <div>
            <table>
                <tr>
                    <th>lastName</th>
                    <th>firstName</th>
                    <th>lastNameKana</th>
                    <th>firstNameKana</th>
                    <th>birthday</th>
                    <th>emailAddress</th>
                    <th>postalCode</th>
                    <th>address</th>
                </tr>
                <tr v-for="userInfo in usersInfo"  :key="userInfo.id">
                    <td> {{ userInfo.lastName }} </td>
                    <td> {{ userInfo.firstName }} </td>
                    <td> {{ userInfo.lastNameKana }} </td>
                    <td> {{ userInfo.firstNameKana }} </td>
                    <td> {{ userInfo.birtdday }} </td>
                    <td> {{ userInfo.emailAddress }} </td>
                    <td> {{ userInfo.postalCode }} </td>
                    <td> {{ userInfo.address }} </td>
                </tr>
            </table>
        </div>
        <div>
            
        </div>
    </div>
</template>
<script>
import store from '@/store';
export default {
    data() {
        return {
            usersInfo: ''
        }
    },
    mounted() {
        console.log('----usersInfoIndex----');
        this.usersInfo = JSON.parse(localStorage.getItem('users-info'))
        store.commit('setUsersInfo', this.usersInfo);
        console.log(this.$store.state.usersInfo);
        console.log(this.usersInfo.length);
    },
    methods: {

        userInfoReg(){
            // 氏名、生年月日登録画面へ遷移
            this.$router.push({name: 'user-info'})
        }
    }
}
</script>