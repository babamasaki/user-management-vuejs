<template>
    <div>
        <div>
            <h3>ユーザ検索</h3>
        </div>
        <div>
            <label for="lastNameSearch">苗字での検索</label><br>
            <input type="text" placeholder="姓" id="lastNameSearch" v-model="lastNameSearch">
            <button @click="userSearch">検索</button>
        </div>
    </div>
</template>
<script>
export default {

    data(){
        return{
            lastNameSearch: ''
        }
    },
    methods: {
        userSearch(){
            console.log('----userSearchCompoent----');
            // 親コンポーネントに値を渡す
            this.$emit('userSearch', this.lastNameSearch);
        }
    }
}
</script>