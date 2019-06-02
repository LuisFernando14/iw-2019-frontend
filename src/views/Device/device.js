import './device.css'
// https://stackoverflow.com/questions/53737648/how-get-clicked-item-in-vue
export default {
  name: 'Device',
  mounted () {
    console.log('en el montado')
  },
  components: {},
  data () {
    return {
      isActived: false,
      selected: '',
      device: {
        Name: '',
        IconName: '',
        Description: '',
        Status: true,
        IsOn: false,
        UserEmail: '',
        Plug: 0
      },
      devicesSelection: [
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
      ]
    }
  },
  methods: {
    addDevice () {
      // console.log('vamos a agregar un dispositivo')
      this.device.UserEmail = JSON.parse(localStorage.getItem('user')).email
      this.$http.post('api/devices/', this.device).then(res => {
        if (res.data.correct) {
          this.$notify({
            group: 'foo',
            position: 'top center',
            type: 'success',
            title: res.data.title,
            text: res.data.message
          })
          setTimeout(() => {
            this.$router.push({ name: 'dashboard' })
          }, 500)
        } else {
          this.$notify({
            group: 'foo',
            position: 'top center',
            type: 'warn',
            title: res.data.title,
            text: res.data.message
          })
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    selectItem (imageSrc, deviceId) {
      console.log('hola click')
      this.selected = deviceId
      this.device.IconName = imageSrc
    }
  },
  created () {
    console.log('hola en la creación del device template')
  }
}
