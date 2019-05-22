<template>
  <div id="user">
    <div class="container w-50 p-3" style="background-color: white;">
      <h3>Mi perfil</h3>
      <hr>
      <form class="">
        <div class="form-group">
          <label for="name">Nombre</label>
          <input type="text" autofocus required class="form-control" id="name" v-model="user.name"
                 placeholder="Nombre">
        </div>
        <div class="form-group">
          <label for="lastname">Apellido</label>
          <input type="text" required class="form-control" id="lastname" v-model="user.lastName"
                 placeholder="Apellido">
        </div>
        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input type="email" required class="form-control" id="email" v-model="user.email"
                 placeholder="Correo electrónico">
        </div>
        <div v-if="update">
          <div class="form-group">
            <label for="currentPassword">Contraseña actual</label>
            <input type="password" required class="form-control" id="currentPassword" placeholder="Contraseña actual">
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="newPassword">Nueva contraseña</label>
              <input type="password" required class="form-control" id="newPassword" placeholder="Nueva contraseña">
            </div>
            <div class="form-group col-md-6">
              <label for="confirmNewPassword">Confirmar nueva contraseña</label>
              <input type="password" required class="form-control" id="confirmNewPassword" placeholder="Confirmar contraseña">
            </div>
          </div>
        </div>
        <input type="button" class="btn btn-primary" @click="manageProfile" :value="buttonTitle">
      </form>
    </div>
  </div>
</template>

<script src="./user.js"></script>
