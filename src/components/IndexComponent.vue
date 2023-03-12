<template>
    <div>
        <h3>ユーザ一覧</h3>
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
    </div>
</template>
<script>
export default {
    props: [
        'usersInfo'
    ]
}
</script>