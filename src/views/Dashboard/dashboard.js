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
      // console.log('vamos a obtener los dispositivos')
      // const userEmail = localStorage.getItem('user')
      const userEmail = JSON.parse(localStorage.getItem('user'))
      this.$http.get(`/api/devices/${userEmail.email}`).then(res => {
        // console.log(res.data)
        this.devices = res.data.deviceData
        // console.log('hahaha')
        // console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
    },
    cambio (event, device) {
      // console.log('cambio')
      // console.log(event.value)
      // console.log(device)
      // console.log(idDevice)
      device.isOn = event.value
      this.$http.put(`/api/devices/${device.id}`, device).then(res => {
        // console.log(res.data)
        // console.log(res)
        this.$emit('isOn-changed', res.data.deviceData)
        // this.devices = res.data.deviceData
        // Object.assign(this.device, res.data.deviceData)
        // console.log('hahaha')
        // console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
    },
    onIsOnChange (data) {
      console.log('signal')
      // console.log(data)
      let d2 = this.device
      // console.log('la prueba')
      // console.log(d2)
      d2.isOn = data.isOn
      // console.log(d2)
      // data = data.device
      data = data.device
      console.log(data)
      // this.device.isOn = data.isOn
      console.log('obj')
      // console.log(this.devices.find);
      console.log(this)
      var idx = this.devices.findIndex(function (el) {
        console.log(el)
        return el.id === data.id
      })
      console.log(idx)
      if (idx >= 0) {
        this.devices[idx].isOn = data.isOn
      } else {
        console.log(idx)
      }
      // this.device = Object.assign({}, this.device, { isOn: data.isOn })
      // this.$set(this.device, 'isOn', data.isOn)
      // this.assign(this.device, data)
      // this.getDevices()
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
