import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    userInfo: {
      lastName: '',       // 姓
      firstName: '',      // 名 
      lastNameKana: '',   // セイ
      firstNameKana: '',  // メイ
      birthday: '',       // 生年月日
      emailAddress: '',   // メールアドレス
      postalCode: '',     // 郵便番号
      address: ''         // 住所
    },
    usersInfo: []
  },
  mutations: {
    setLastName(state, lastName) {
        state.userInfo.lastName = lastName
    },
    setFirstName(state, firstName) {
      state.userInfo.firstName = firstName
    },
    setLastNameKana(state, lastNameKana) {
      state.userInfo.lastNameKana = lastNameKana
    },
    setFirstNameKana(state, firstNameKana) {
      state.userInfo.firstNameKana = firstNameKana
    },
    setBirthday(state, birthday) {
      state.userInfo.birthday = birthday
    },
    setEmailAddress(state, emailAddress) {
      state.userInfo.emailAddress = emailAddress
    },
    setPostalCode(state, postalCode) {
      state.userInfo.postalCode = postalCode
    },
    setAddress(state, address) {
      state.userInfo.address = address
    },
    setUsersInfo(state, usersInfo) {
      state.usersInfo = usersInfo
    }
  }
})