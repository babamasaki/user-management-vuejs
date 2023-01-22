<template>
    <div>
        <div>
            <h1>userInfo</h1>
        </div>
        <div>
            <label for="lastName">姓</label>
            <input type="text" placeholder="姓" id="lastName" v-model="lastName">
            <label for="firstName">名</label>
            <input type="text" placeholder="名" id="firstName" v-model="firstName"><br>
            <label for="lastNameKana">セイ</label>
            <input type="text" placeholder="セイ" id="lastNameKana" v-model="lastNameKana">
            <label for="firstNameKana">メイ</label>
            <input type="text" placeholder="メイ" id="firstNameKana" v-model="firstNameKana"><br>
            <label for="birthday">生年月日</label>
            <input type="date" id="birthday" v-model="birthday"><br>
            <button @click="userInfoReg">ユーザ情報の登録</button>
        </div>
    </div>
</template>
<script>
import store from '@/store';
export default {
    data() {
        return{
            lastName: '',       // 姓
            firstName: '',      // 名
            lastNameKana: '',   // セイ
            firstNameKana: '',  // メイ
            birthday: ''        // 生年月日
        }
    },
    methods: {
        userInfoReg(){
            console.log('----userInfo----');
            store.commit('setLastName', this.lastName);
            store.commit('setFirstName', this.firstName);
            store.commit('setLastNameKana', this.lastNameKana);
            store.commit('setFirstNameKana', this.firstNameKana);
            store.commit('setBirthday', this.birthday);
            this.$router.push({name: 'email-address-reg'})
        }
    }
}
</script>