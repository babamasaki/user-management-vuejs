import Vue from 'vue';
import Router from 'vue-router';
import UserInfoRegistration from './views/UserInfoRegistration';
import EmailAddressRegistration from './views/EmailAddressRegistration';
import AddressReg from './views/AddressRegistration';
import UsersInfoIndex from './views/UsersInfoIndex';

Vue.use(Router);

export default new Router({
    routes:[
        {
            path: '/',
            name: 'users-info',
            component: UsersInfoIndex
        },
        {
            path: '/userInfoReg',
            name: 'user-info',
            component: UserInfoRegistration
        },
        {
            path: '/emailAddressReg',
            name: 'email-address-reg',
            component: EmailAddressRegistration
        },
        {
            path: '/addressReg',
            name: 'address-reg',
            component: AddressReg
        }
    ]
});