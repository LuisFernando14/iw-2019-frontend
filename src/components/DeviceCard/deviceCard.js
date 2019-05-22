import './deviceCard.css'
// https://www.youtube.com/watch?v=SwX8a_wzesg
// https://stackoverflow.com/questions/40561301/loop-row-in-bootstrap-every-3-columns
export default {
  name: 'DeviceCard',
  props: {},
  mounted () {
  },
  components: {},
  data () {
    return {
      devices: []
    }
  },
  methods: {
    goToAddDevice () {
      this.$router.replace('/devices/add')
    },
    getDevices () {
      console.log('vamos a obtener los dispositivos')
      const userEmail = localStorage.getItem('userEmail')
      this.$http.get(`/api/devices/${userEmail}`).then(res => {
        console.log(res.data)
        this.devices = res.data.data
        // console.log('hahaha')
        // console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  created () {
    console.log('hola en la creación del dashboard')
  }
}
