<template>
  <div id="deviceView">
    <div class="container w-50 p-3">
      <h2>Información del dispositivo</h2>
      <label for="email">Identificador</label>
      <span id="email">{{device.id}}</span>
      <br>
      <label for="name">Ícono</label>
      <span id="name">{{device.iconName}}</span>
      <br>
      <label for="lastname">Nombre del dispositivo</label>
      <span id="lastname">{{device.name}}</span>
      <br>
      <label for="password">Status</label>
      <span id="password">{{device.status}}</span>
      <br>
      <label for="encendido">¿Está encendido?</label>
      <span id="encendido">{{device.isOn}}</span>
    </div>
  </div>
</template>
<script src="./deviceView.js"></script>
