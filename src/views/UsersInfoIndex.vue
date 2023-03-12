<template>
    <div>
        <h1>usersInfoIndex</h1>
        <div>
            <button @click="userInfoReg">ユーザ情報の登録</button>
        </div>
        <div>
            <h3>ユーザ検索</h3>
        </div>
        <div>
            <div v-show="usersInfo">
                <IndexCocomponent v-bind:usersInfo="usersInfo"></IndexCocomponent>
            </div>
            <div v-show="!usersInfo">
                <p>「ユーザ情報の登録」ボタンからユーザ登録をしてください。</p>
            </div>
        </div>
        <div>
        </div>
    </div>
</template>
<script>
import store from '@/store';
import IndexCocomponent from '../components/IndexComponent.vue';
export default {
    components:{
        IndexCocomponent
    },
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