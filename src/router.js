import Vue from 'vue';
import Router from 'vue-router';
import UserInfoRegistration from './views/UserInfoRegistration';
import EmailAddressRegistration from './views/EmailAddressRegistration';

Vue.use(Router);

export default new Router({
    routes:[
        // {
        //     path: '/', component: UserInfoRegistration
        // },
        {
            path: '/userInfoReg',
            name: 'user-info',
            component: UserInfoRegistration
        },
        {
            path: '/emailAddressReg',
            name: 'email-address-reg',
            component: EmailAddressRegistration
        }
    ]
});