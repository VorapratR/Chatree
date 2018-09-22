<template>
    <div class="login">
        <h3>Sign In</h3><br>
        <input type="text" placeholder="Email"><br>
        <input type="password" placeholder="Password"><br>
        <button>Connet</button>
        <p>YOUdon't <router-link to="/sign-up">create one</router-link> </p>
    </div>
</template>

<script>
export default {
    name: 'login',
    data: function(){
        return{}
    },
    methods:{
        login:function(){
            this.$router.replace("hello")
        }
    }
}
</script>


<style scoped>
.login {
    margin-top: 40px;
}
input  {
    margin: 10px  0;
    width: 20%;
    padding: 15px;
}
button {
    margin-top: 20px;
    width: 10%
}
p {
    margin-top: 40px;
    font-size:13px;
}
p a  {
    text-decoration: underline;
    cursor: pointer;
}
</style>