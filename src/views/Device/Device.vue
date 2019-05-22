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
            <h2 class="float-left">Tipo de dispositivo</h2>
          </div>
          <br>
          <div class="row">
            <div class="col">
              <img src="https://datastorageusers.blob.core.windows.net/devices-images/smart tv.png"
                   class="list-group-item active image img-thumbnail" alt="Televisión">
              <div class="overlay">
                <div class="text">Televisión</div>
              </div>
            </div>
            <div class="col">
              <img src="https://datastorageusers.blob.core.windows.net/devices-images/light.png"
                   class="list-group-item image img-thumbnail" alt="Iluminación">
              <div class="overlay">
                <div class="text">Ilumnación</div>
              </div>
            </div>
            <div class="col">
              <img src="https://datastorageusers.blob.core.windows.net/devices-images/smartDoor.png"
                   class="list-group-item image img-thumbnail" alt="Puerta">
              <div class="overlay">
                <div class="text">Puerta</div>
              </div>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col">
              <img src="https://datastorageusers.blob.core.windows.net/devices-images/videogame.png"
                   class="list-group-item image img-thumbnail" alt="Consola">
              <div class="overlay">
                <div class="text">Videojuegos</div>
              </div>
            </div>
            <div class="col">
              <img src="https://datastorageusers.blob.core.windows.net/devices-images/fan.png"
                   class="list-group-item image img-thumbnail" alt="Ventilador">
              <div class="overlay">
                <div class="text">Ventilación</div>
              </div>
            </div>
            <div class="col">
              <img src="https://datastorageusers.blob.core.windows.net/devices-images/music.png"
                   class="list-group-item image img-thumbnail" alt="Música">
              <div class="overlay">
                <div class="text">Música</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <h2><label for="description">Descripción:</label></h2>
          <textarea placeholder="Descripción del dispositivo" name="description" id="description"
                    v-model="device.Description" cols="30" rows="10"></textarea>
          <br>
          <button id="btnSave" class="btn btn-lg btn-primary" :onclick="addDevice">Guardar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./device.js"></script>
