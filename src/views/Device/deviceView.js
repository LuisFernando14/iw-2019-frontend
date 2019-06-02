import './deviceView.css'

// import DeleteModal from '@/components/DeleteModal/DeleteModal.vue'

export default {
  name: 'DeviceView',
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
    deleteDevice () {
      console.log('boorar el device')
      const userEmail = JSON.parse(localStorage.getItem('user'))
      this.$http.delete(`/api/devices/${userEmail.email}/${this.deviceId}`).then(res => {
        if (res.data.correct) {
          window.location.replace('#/dashboard')
          this.$notify({
            group: 'foo',
            position: 'top center',
            type: 'success',
            title: 'Mensaje del sistema',
            text: 'Dispositivo borrado correctamente'
          })
        }
      }).catch((error) => {
        this.$notify({
          group: 'foo',
          position: 'top center',
          type: 'success',
          title: 'Mensaje del sistema',
          text: error
        })
      })
    }
  },
  created () {
    console.log('hola en la creación del deviceview')
  }
}
