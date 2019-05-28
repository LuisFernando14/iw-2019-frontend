<template>
  <div id="dashboard">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <img class="mb-4" src="https://datastorageusers.blob.core.windows.net/images/full-white-logo.png" alt=""
               width="72"
               height="72">
        </div>
        <div class="col-sm"></div>
      </div>
      <div class="row">
        <div class="col-sm"><h3>Mis dispositivos</h3></div>
        <div class="col-sm"></div>
        <div class="col-sm"></div>
      </div>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <table class="table table-bordered">
            <thead style="background-color: #969FAA;" class="">
            <tr>
              <th scope="col">Nombre</th>

              <th scope="col">Icono</th>
              <th scope="col">Descripción</th>
              <th scope="col">Estado</th>
              <th scope="col">Encendido</th>
              <th scope="col">Acciones</th>
            </tr>
            </thead>
            <tbody style="background-color: #ffffff">
            <tr v-for="device in devices" :key="device.id">
              <td>
                <a style="text-decoration: none; color: blue;" :href="'#/devices/view/'+device.id">{{device.name}}</a>
              </td>
              <td><img :src="device.iconName" style="width: 2em; height: 2em;" :alt="device.name"></td>
              <td>{{device.description}}</td>
              <td>
                <span v-if="device.status">Habilitado</span>
                <span v-else>Deshabilitado</span>
              </td>
              <td>
                <toggle-button :id="device.id" :value="device.isOn" @change="cambio($event, device)" :sync="true"
                               :labels="{checked: 'ON', unchecked: 'OFF'}"/>
              </td>
              <td>
                <a :href="'#/devices/update/'+device.id"><img src="https://datastorageusers.blob.core.windows.net/devices-images/pencil-update.png"
                                alt="Modificar">
                </a>
                |
                <a :href="'#/devices/delete/'+device.id"><img src="https://datastorageusers.blob.core.windows.net/devices-images/trash-can-delete.png"
                                alt="Borrar">
                </a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="col-1"></div>
      </div>
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <a href="#/devices/add" class="btn btn-lg" style="background-color: #47525E; color: #ffffff;">Agregar
            dispositivo</a>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
<script src="./dashboard.js"></script>
