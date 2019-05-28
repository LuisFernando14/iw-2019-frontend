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
      deviceId: this.$route.params.id
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
    }
  },
  created () {
    console.log('hola en la creación del deviceview')
  }
}
