<template>
  <div id="login">
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin my-5">
            <div class="card-body">
              <div class="text-center">
                <img class="img-fluid" width="72px" height="72px" src="https://datastorageusers.blob.core.windows.net/images/full-white-logo.png" alt="Main Logo">
              </div>
              <br>
              <h5 class="card-title text-center">Iniciar sesión</h5>
              <div id="loginForm">
                <div class="form-group">
                  <input ref="Email" type="email" autofocus name="Email" class="form-control" id="Email" v-model="login.Email" placeholder="Correo electrónico">
                </div>
                <div class="form-group">
                  <input type="password" name="Password" class="form-control" id="Password" v-model="login.Password" v-on:keyup.enter="iniciarSesion"  placeholder="Contraseña">
                </div>
                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me"> Mantener sesión iniciada
                  </label>
                </div>
                <div class="form-group">
                  <input type="button" id="btnLogin" class="form-control btn btn-lg btn-info" value="Iniciar sesión" @click="iniciarSesion">
                </div>
              </div>
              <hr class="my-4">
              <div class="text-center">
                <p>¿Olvidaste tu contraseña?</p>
                <p>¿No tienes cuenta? <a href="#">Regístrate</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./login.js"></script>
