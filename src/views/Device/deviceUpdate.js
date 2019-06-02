import './deviceUpdate.css'

export default {
  name: 'DeviceUpdate',
  mounted () {
    // this.getDevices()
    // console.log(this.deviceId)
    this.getDeviceById()
  },
  components: {
    // 'DeleteModal': DeleteModal
  },
  data () {
    return {
      device: {
        id: '',
        name: '',
        iconName: '',
        description: '',
        status: '',
        isOn: '',
        userEmail: ''
      },
      devicesType: [
        {
          id: 'television icon',
          imageSrc: 'https://datastorageusers.blob.core.windows.net/devices-images/smart tv.png',
          imageAlt: 'Televisión',
          itemText: 'Televisión'
        },
        {
          id: 'light icon',
          imageSrc: 'https://datastorageusers.blob.core.windows.net/devices-images/light.png',
          imageAlt: 'Iluminación',
          itemText: 'Iluminación'
        },
        {
          id: 'door icon',
          imageSrc: 'https://datastorageusers.blob.core.windows.net/devices-images/smartDoor.png',
          imageAlt: 'Puerta inteligente',
          itemText: 'Puerta'
        },
        {
          id: 'console icon',
          imageSrc: 'https://datastorageusers.blob.core.windows.net/devices-images/videogame.png',
          imageAlt: 'Consola',
          itemText: 'Videojuegos'
        },
        {
          id: 'fan icon',
          imageSrc: 'https://datastorageusers.blob.core.windows.net/devices-images/fan.png',
          imageAlt: 'Ventilador',
          itemText: 'Ventilador'
        },
        {
          id: 'speaker icon',
          imageSrc: 'https://datastorageusers.blob.core.windows.net/devices-images/music.png',
          imageAlt: 'Música',
          itemText: 'Barra de sonido'
        }
      ],
      deleteDeviceText: 'Borrar',
      deviceId: this.$route.params.id,
      deleteDev: false
    }
  },
  methods: {
    getDeviceById () {
      console.log('vamos a obtener dispositivo por ID')
      const userEmail = JSON.parse(localStorage.getItem('user'))
      this.$http.get(`/api/devices/${userEmail.email}/${this.deviceId}`).then(res => {
        console.log(res.data)
        this.device = res.data.deviceData
      }).catch((error) => {
        console.log(error)
      })
    },
    updateDevice () {
      console.log('actualizar el dispositivo')
      console.log(this.device)
      // return
      // const userEmail = JSON.parse(localStorage.getItem('user'))
      this.$http.put(`/api/devices/${this.device.id}`, this.device).then(res => {
        if (res.data.correct) {
          window.location.replace('#/dashboard')
          this.$notify({
            group: 'foo',
            position: 'top center',
            type: 'success',
            title: 'Mensaje del sistema',
            text: 'Dispositivo actualizado correctamente'
          })
        }
      }).catch((error) => {
        this.$notify({
          group: 'foo',
          position: 'top center',
          type: 'success',
          title: 'Ha ocurrido un error',
          text: error
        })
      })
    }
  },
  created () {
    console.log('hola en la creación del deviceview')
  }
}
