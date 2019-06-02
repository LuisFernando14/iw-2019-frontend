<template>
  <div id="device">
    <div id="mainBanner" class="">
      <h2 id="mainBannerText">Agregar dispositivo</h2>
    </div>
    <div class="container">
      <br>
      <div class="row">
        <div class="col-sm">
          <img id="logoImg" class="rounded mx-auto d-block align-bottom" style="margin-top: 5em"
               src="https://datastorageusers.blob.core.windows.net/images/full-white-logo.png" alt="Equipo 48 logo">
        </div>
        <div class="col-sm">
          <div class="row">
            <input type="text" style="background-color: white" autofocus class="input input-group-text float-none"
                   placeholder="Nombre del dispositivo" v-model="device.Name">
          </div>
          <br>
          <div class="row">
            <input type="number" v-model="device.Plug" style="background-color: white" class="input input-group-text float-none" placeholder="Enchufe">
          </div>
          <br>
          <div class="row">
            <h2 class="float-left">Tipo de dispositivo</h2>
          </div>
          <br>
          <div class="row">
            <div v-for="device in devicesSelection" :key="device.id" class="col">
              <img @click="selectItem(device.imageSrc, device.id)" :src="device.imageSrc"
                   class="list-group-item image img-thumbnail" v-bind:class="{active: device.id === selected}" :alt="device.imageAlt">
              <div class="overlay">
                <div class="text">{{device.itemText}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <h2><label for="description">Descripción:</label></h2>
          <textarea placeholder="Descripción del dispositivo" name="description" id="description"
                    v-model="device.Description" cols="50" rows="10"></textarea>
          <br>
          <button id="btnSave" class="btn btn-lg btn-primary" @click="addDevice">Guardar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./device.js"></script>
