<template>
  <div id="register">
    <div class="container w-50 p-3" style="background-color: white; border-radius: 12px">
      <div class="container">
        <div class="row">
          <div class="col">
            <p class="font-weight-bold">Crear tu cuenta de SmartHouse</p>
          </div>
          <div class="col">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <input type="text" autofocus required class="form-control" id="name" v-model="user.Name" placeholder="Nombre">
              </div>
              <div class="form-group col-md-6">
                <input type="text" required class="form-control" id="lastname" v-model="user.LastName" placeholder="Apellido">
              </div>
            </div>
            <div class="form-group">
              <input type="email" required class="form-control" id="email" v-model="user.Email" placeholder="Correo electrónico">
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <input type="password" required class="form-control" v-model="user.Password" id="password" placeholder="Contraseña">
              </div>
              <div class="form-group col-md-6">
                <input type="password" required class="form-control" id="passwordConfirm" v-model="passwordConfirm" placeholder="Confirmar">
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck">
                <label class="form-check-label" for="gridCheck">
                  Acepto <a href="">términos y condiciones</a>
                </label>
              </div>
            </div>
            <input type="button" class="btn btn-primary" @click="addUser" value="Registrarme">
          </form>
        </div>
        <div class="col">
          <div class="col-sm">
            <img id="logoImg" class="rounded mx-auto d-block"
                 src="https://datastorageusers.blob.core.windows.net/images/white-logo.png" alt="Equipo 48 logo">
          </div>
          <p class="font-weight-light">Una cuenta. Todos los dispostivios a tu alcance</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./register.js"></script>
