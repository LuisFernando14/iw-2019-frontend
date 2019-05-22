<template>
  <div id="login">
    <div class="container w-25 p-3" style="background-color: white">
      <img class="mb-4" src="https://datastorageusers.blob.core.windows.net/images/white-logo.png" alt="" width="72"
           height="72">
      <h1>Iniciar sesión</h1>
      <div id="loginForm">
        <div class="form-group">
          <input autofocus type="email" name="Email" class="form-control" id="Email" v-model="login.Email"
                 placeholder="Correo electrónico">
        </div>
        <div class="form-group">
          <input type="password" name="Password" class="form-control" id="Password" v-model="login.Password"
                 placeholder="Contraseña">
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Mantener sesión iniciada
          </label>
        </div>
        <div class="form-group">
          <input type="button" id="btnLogin" class="form-control btn btn-lg" value="Iniciar sesión"
                 @click="iniciarSesion">
        </div>
        <p class="mt-5 mb-3 text-muted">¿Olvidaste tu contraseña?</p>
        <p>¿No tenes cuenta? Regístrate <a href="/signup/">aquí</a></p>
      </div>
    </div>
  </div>
</template>
<script src="./login.js"></script>
