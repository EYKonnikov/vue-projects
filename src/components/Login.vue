<template>
  <div class="row">
    <div>
      <div>
        <p>Logged in as: <br> {{ currentUser }}</p>
      </div>
      <form>
        <div class="form-group">
          <label>Email address</label> 
          <input class="form-control" type="email" id="email" placeholder="Enter email">
      </div>
      <div class="form-group">
          <label>Password</label> 
          <input class="form-control" type="password" id="password" placeholder="Enter password">
      </div>
      <button type="button" class="btn btn-primary" @click.prevent="signIn">Sign in</button>
      <button type="button" class="btn btn-danger" @click.prevent="signOut">Sign out</button>
      </form>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'
import { store } from '../store/store.js'

Firebase.auth().onAuthStateChanged(function(user) {
  if(user) {
    store.dispatch('setUser', user)
  } else {
    store.dispatch('setUser', null)
  }
})

export default {
  methods: {
    signIn() {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;

      Firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if(errorCode === 'auth/wrond-password') {
          alert('Wrond password');
        } else {
          alert(errorMessage);
        }
      });
      },
    signOut() {
      Firebase.auth().signOut().then(function() {
        alert('logged out');
      }).catch(function(error) {
        alert("error");
      })
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser
    }
  }
}

</script>

