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
                <tr v-for="userInfoDisp in usersInfoDisp"  :key="userInfoDisp.id">
                    <td> {{ userInfoDisp.lastName }} </td>
                    <td> {{ userInfoDisp.firstName }} </td>
                    <td> {{ userInfoDisp.lastNameKana }} </td>
                    <td> {{ userInfoDisp.firstNameKana }} </td>
                    <td> {{ userInfoDisp.birtdday }} </td>
                    <td> {{ userInfoDisp.emailAddress }} </td>
                    <td> {{ userInfoDisp.postalCode }} </td>
                    <td> {{ userInfoDisp.address }} </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    props: [
        'usersInfoDisp'
    ]
}
</script>