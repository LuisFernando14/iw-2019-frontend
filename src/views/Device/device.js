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
      device: {
        Name: '',
        IconName: '',
        Description: '',
        Status: true,
        IsOn: false,
        UserEmail: ''
      }
    }
  },
  methods: {
    addDevice () {
      console.log('vamos a agregar un dispositivo')
    }
  },
  created () {
    console.log('hola en la creación del device template')
  }
}
