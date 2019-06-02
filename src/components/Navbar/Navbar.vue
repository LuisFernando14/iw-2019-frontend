<template>
  <div class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#/dashboard">Mi hogar inteligente</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!--<div v-if="showProfile">-->
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
        </ul>
        <ul v-if="showProfile" class="navbar-nav ml-auto nav-flex-icons">
          <li class="nav-item">
            <a class="nav-link waves-effect waves-light align-middle" style="margin-top: 10px">
              {{name}}
              <i class="fas fa-envelope"></i>
            </a>
          </li>
          <li class="nav-item avatar dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
              <div id="profileImage">{{letter}}</div>
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-secondary"
                 aria-labelledby="navbarDropdownMenuLink-55">
              <a class="dropdown-item" href="#/profile">Mi perfil</a>
              <a class="dropdown-item" href="#">Mis rutinas</a>
              <a class="dropdown-item" @click="cerrarSesion">Cerrar sesión</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  <!--</div>-->
</template>
<script src="./navbar.js"></script>
