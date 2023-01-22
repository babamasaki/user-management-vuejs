<template>
    <div>
        <div>
            <h1>Emailaddress</h1>
            <label for="emailAddress">メールアドレス</label>
            <input type="text" placeholder="Emailを入力してください" id="emailAddress" v-model="emailAddress"><br>
            <p v-if="isInValidEmail" class="error">メールアドレスの形式で入力してください。</p>
            <button @click="emailAddressReg">ユーザ情報の登録</button>
        </div>
    </div>
</template>
<script>
import store from '@/store';
export default {
    data(){
        return{
            emailAddress: '', // メールアドレス
        }
    },
   computed: {
        isInValidEmail(){
            console.log('test');
            //メールアドレスとして判定される文字列と記号の組み合わせを定数化
            const reg = new RegExp(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/);
            //指定した組み合わせになっていなかった場合判定を返す。
            return !reg.test(this.emailAddress);
        }
    },
    methods: {
        emailAddressReg(){
            console.log('emailAddressReg');
            store.commit('setEmailAddress', this.emailAddress);
    
            let userInfo = this.$store.state.userInfo;
            console.log(userInfo);
            // this.$router.push({name: 'email-address-reg'})

        }
    }
}
</script>