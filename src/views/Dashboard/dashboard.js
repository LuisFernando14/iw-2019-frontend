import './dashboard.css'
// import ActionHub from "../../hubs/action-hub";
// https://www.npmjs.com/package/vue-js-toggle-button

export default {
  name: 'Dashboard',
  mounted () {
    this.getDevices()
  },
  components: {},
  data () {
    return {
      devices: [],
      device: {
        id: '',
        name: '',
        iconName: '',
        description: '',
        status: '',
        isOn: '',
        userEmail: ''
      }
    }
  },
  methods: {
    goToAddDevice () {
      this.$router.replace('/devices/add')
    },
    getDevices () {
      const userEmail = JSON.parse(localStorage.getItem('user'))
      this.$http.get(`/api/devices/${userEmail.email}`).then(res => {
        this.devices = res.data.deviceData
      }).catch((error) => {
        console.log(error)
      })
    },
    cambio (event, device) {
      device.isOn = event.value
      this.$http.put(`/api/devices/${device.id}`, device).then(res => {
        this.$emit('isOn-changed', res.data.deviceData)
      }).catch((error) => {
        console.log(error)
      })
    },
    onIsOnChange (data) {
      console.log('signal')
      let d2 = this.device
      d2.isOn = data.isOn
      data = data.device
      console.log(data)
      console.log('obj')
      console.log(this)
      let idx = this.devices.findIndex(function (el) {
        console.log(el)
        return el.id === data.id
      })
      if (idx >= 0) {
        this.devices[idx].isOn = data.isOn
      } else {
        // console.log(idx)
      }
    }
  },
  created () {
    const userEmail = JSON.parse(localStorage.getItem('user'))
    // console.log('hola en la creación del dashboard')
    this.$actionHub.dashboardOpened(userEmail.email)
    this.$actionHub.$on('isOn-changed', this.onIsOnChange)
  },
  beforeDestroy () {
    const userEmail = JSON.parse(localStorage.getItem('user'))
    // Notify the server we stopped watching the question
    this.$actionHub.dashboardClosed(userEmail.email)
    this.$actionHub.$off('isOn-changed', this.onIsOnChange)
  }
}
