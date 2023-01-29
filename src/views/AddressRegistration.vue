<template>
    <div>
        <h1>住所入力</h1>
        <div>
            <label>住所</label>
            <div>
                <input v-model="postalcode1"/><span>ー</span>
                <input v-model="postalcode2"/>
                <button @click="searchAddress">住所検索</button>
            </div>
        </div>
        <div>
            <label>都道府県</label>
            <input type="text" v-model="prefecture"/>
        </div>
        <div>
            <label>市区町村</label>
            <input type="text" v-model="city"/>
        </div>
        <div>
            <label>地名・番名</label>
            <input type="text" v-model="town"/>
        </div>
        <div>
            <label>建物名・階・番号</label>
            <input type="text" v-model="building"/>
        </div>
        <div>
            <button @click="addressReg">ユーザ情報の登録</button>
        </div>
    </div>
</template>
<script>
import store from '@/store';
import api from 'axios';

const jsonpAdapter = require('axios-jsonp')

export default {
  data() {
    return {
        zipCode: '',
        postalcode1: '', // 郵便番号上3桁
        postalcode2: '', // 郵便番号下4桁
        prefecture: '', // 都道府県
        city: '', // 市区町村
        town: '', // 町
        building: '', // 建物
    }
  },
  methods: {
    searchAddress() {
      this.zipCode = this.postalcode1 + this.postalcode2
      api.get(`https://api.zipaddress.net/?zipcode=${this.zipCode}`, {adapter: jsonpAdapter}).then(rs => {
        const response = rs.data
        this.prefecture = response.pref
        this.city = response.city
        this.town = response.town
        this.building = ''
      })
    },
    addressReg() {
        store.commit('setPostalCode', this.zipCode);
        store.commit('setAddress', this.prefecture + this.city + this.town + this.building);
        this.$router.push({name: 'reg-Completed'})
    }
  }
}
</script>