import './dashboard.css'
// import ActionHub from "../../hubs/action-hub";
// https://www.npmjs.com/package/vue-js-toggle-button

export default {
  name: 'Dashboard',
  mounted () {
    this.getDevices()
    // console.log('jiji')
    // console.log(devices)
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
      // const userEmail = localStorage.getItem('user')
      const userEmail = JSON.parse(localStorage.getItem('user'))
      this.$http.get(`/api/devices/${userEmail.email}`).then(res => {
        console.log(res.data)
        this.devices = res.data.deviceData
        // console.log('hahaha')
        // console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
    },
    cambio () {
      console.log('cambio')
    }
  },
  created () {
    const userEmail = JSON.parse(localStorage.getItem('user'))
    console.log('hola en la creación del dashboard')
    return this.$actionHub.dashboardOpened(userEmail.email)
  },
  beforeDestroy () {
    const userEmail = JSON.parse(localStorage.getItem('user'))
    // Notify the server we stopped watching the question
    this.$actionHub.dashboardClosed(userEmail.email)
  }
}
