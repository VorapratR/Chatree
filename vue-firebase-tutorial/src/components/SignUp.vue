<template> 
    <div class="sign-up">
        <p>Let's create a new account </p> 
        <input type="text" placeholder="Email"><br> 
        <input type="password" placeholder="Password"><br> 
        <button>Sign Up</button>
        <span>or go back to login.<router-link to="/login">login</router-link></span> 
    </div> 
</template>
<script> 
    import firebase from 'firebase'
    export default {
        name: "signUp", 
        data: function() {
        return {}
    },
    methods: {
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
                function(user){
                    alert('Your account has been created !')
                },
                function(err) {
                    alert('Oops.' + err.massage)
                }
            );
        }
    }
  }
</script>
<style scoped> 
.signUp {
margin-top: 40px;
}
input { 
    margin: 10px 0; 
    width: 204; 
    padding: 15px;
}
button {
    margin-top: 10px; 
    width: 10%; 
    cursor: pointer;
}
span {
    display: block; 
    margin-top: 20px; 
    font-size: 11px;
}
</style>

