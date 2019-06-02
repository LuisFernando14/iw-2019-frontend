<template>
  <div id="deviceUpdate">
    <div class="container">
      <div class="container w-50 p-3" style="background-color: white;">
        <div class="text-left">
          <h2>Información del dispositivo</h2>
          <hr>
          <div class="row">
            <label for="name" class="col-sm-4 col-form-label font-weight-bold">Tipo de dispositivo</label>
            <div class="col-sm-8">
              <select autofocus id="name" class="form-control" v-model="device.iconName">
                <!-- inline object literal -->
                <option v-for="device in devicesType" v-bind:value="device.imageSrc" :key="device.id">{{device.itemText}}</option>
              </select>
            </div>
          </div>
          <br>
          <div class="row">
            <label for="lastname" class="col-sm-4 col-form-label font-weight-bold">Nombre del dispositivo</label>
            <div class="col-sm-8">
              <input id="lastname" v-model="device.name" type="text" class="form-control">
            </div>
          </div>
          <div class="row">
            <label for="plug" class="col-sm-4 col-form-label font-weight-bold">Número de enchufe</label>
            <div class="col-sm-8">
              <input id="plug" v-model="device.plug" type="text" class="form-control">
            </div>
          </div>
          <br>
          <div class="row">
            <label for="description" class="col-sm-4 col-form-label font-weight-bold">Descripción del dispositivo</label>
            <div class="col-sm-8">
              <textarea name="" v-model="device.description" class="form-control" id="description" cols="30" rows="5"></textarea>
            </div>
          </div>
          <br>
          <div class="row">
            <label for="password" class="col-sm-4 col-form-label font-weight-bold">¿Está habilitado?</label>
            <div class="col-sm-8">
              <select id="password" v-model="device.status">
                <!-- inline object literal -->
                <option v-bind:value="true">Sí</option>
                <option v-bind:value="false">No</option>
              </select>
            </div>
          </div>
          <div class="row">
            <label for="encendido" class="col-sm-4 col-form-label font-weight-bold">¿Está encendido?</label>
            <div class="col-sm-8">
              <select id="encendido" v-model="device.isOn">
                <!-- inline object literal -->
                <option v-bind:value="true">Sí</option>
                <option v-bind:value="false">No</option>
              </select>
            </div>
          </div>
        </div>
        <div class="text-right">
          <div class="row">
            <div class="col-sm-6">
            </div>
            <div class="col-sm-6">
              <a class="btn btn-primary" style="color: white" @click="updateDevice">Guardar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./deviceUpdate.js"></script>
