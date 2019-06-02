<template>
  <div id="deviceView">
    <div class="container w-50 p-3" style="background-color: white;">
      <div class="text-left">
        <h2>Información del dispositivo</h2>
        <hr>
        <div class="row">
          <label for="email" class="col-sm-4 col-form-label font-weight-bold">Identificador:</label>
          <div class="col-sm-8">
            <span id="email">{{device.id}}</span>
          </div>
        </div>
        <div class="row">
          <label for="name" class="col-sm-4 col-form-label font-weight-bold">Ícono</label>
          <div class="col-sm-8">
            <img id="name" :src="device.iconName" style="width: 2em; height: 2em;" alt="Icono del dispositivo">
          </div>
        </div>
        <div class="row">
          <label for="lastname" class="col-sm-4 col-form-label font-weight-bold">Nombre del dispositivo</label>
          <div class="col-sm-8">
            <span id="lastname">{{device.name}}</span>
          </div>
        </div>
        <div class="row">
          <label for="description" class="col-sm-4 col-form-label font-weight-bold">Descripción del dispositivo</label>
          <div class="col-sm-8">
            <span id="description">{{device.description}}</span>
          </div>
        </div>
        <div class="row">
          <label for="password" class="col-sm-4 col-form-label font-weight-bold">¿Está habilitado?</label>
          <div class="col-sm-8">
            <span v-if="device.status" id="password">Activo</span>
            <span v-else>Inactivo</span>
          </div>
        </div>
        <div class="row">
          <label for="encendido" class="col-sm-4 col-form-label font-weight-bold">¿Está encendido?</label>
          <div class="col-sm-8">
            <span v-if="device.isOn" id="encendido">Encendido</span>
            <span v-else>Apagado</span>
          </div>
        </div>
      </div>
      <div class="text-right">
        <div class="row">
          <div class="col-sm-10">
            <a :href="'#/devices/update/'+device.id" class="btn btn-info">Editar</a>
          </div>
          <div class="col-sm-2">
            <a class="btn btn-danger" style="color: white" @click="deleteDevice">{{deleteDeviceText}}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container w-50 p-3 text-left">
      <a href="#/dashboard">Volver al menú</a>
    </div>
  </div>
</template>
<script src="./deviceView.js"></script>
