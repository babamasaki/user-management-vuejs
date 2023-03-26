<template>
    <div>
        <h1>usersInfoIndex</h1>
        <div>
            <button @click="userInfoReg">ユーザ情報の登録</button>
        </div>
        <div>
            <UserSearchComponent
                @userSearch="userSearch"
            >
            </UserSearchComponent>
        </div>
        <div>
            <div v-show="usersInfoDisp.length">
                <IndexComponent
                    v-bind:usersInfoDisp="usersInfoDisp"
                >
                </IndexComponent>
            </div>
            <div v-show="!usersInfoDisp.length">
                <p>「ユーザ情報の登録」ボタンからユーザ登録をしてください。</p>
            </div>
        </div>
        <div>
        </div>
    </div>
</template>
<script>
import store from '@/store';
import IndexComponent from '../components/IndexComponent.vue';
import UserSearchComponent from '../components/UserSearchCocomponent.vue';
export default {
    components:{
        IndexComponent,
        UserSearchComponent
    },
    data() {
        return {
            usersInfo: [], // ユーザ情報一覧
            searchUsersInfo: [], // 検索結果の情報を設定
            usersInfoDisp: [] // 画面表示用
        }
    },
    mounted() {
        console.log('----usersInfoIndex----');
        this.usersInfo = JSON.parse(localStorage.getItem('users-info'))
        
        // データがない場合配列の初期化を行う
        if(this.usersInfo === null){
            this.usersInfo = [];
        }

        // 画面表示用変数に設定
        this.usersInfoDisp = this.usersInfo;

        store.commit('setUsersInfo', this.usersInfo);
    },
    methods: {
        userSearch(param){
            console.log('---検索処理---');
            // 一致するユーザ情報を取得
            this.searchUsersInfo = this.usersInfo.filter(function (value) {
                // lastNameで検索
                return value.lastName === param;
            });

            if(0 === this.searchUsersInfo.length){
                // this.searchUsersInfoが0件の場合はuserInfoを表示
                this.usersInfoDisp = this.usersInfo;

            } else {
                // this.searchUsersInfoが0件以外の場合userInfoに取得結果を設定
                this.usersInfoDisp = this.searchUsersInfo;

            }
        },
        userInfoReg(){
            // 氏名、生年月日登録画面へ遷移
            this.$router.push({name: 'user-info'})
        }
    }
}
</script>