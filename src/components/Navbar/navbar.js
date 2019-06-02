import './navbar.css'
// https://stackoverflow.com/questions/42903356/hide-vue-router-from-a-page

export default {
  name: 'Navbar',
  mounted () {
    let user = JSON.parse(localStorage.getItem('user'))
    let userName = user.name
    this.letter = userName.charAt(0).toUpperCase()
    this.name = userName
    this.showProfile = localStorage.getItem('user') !== undefined
  },
  components: {
  },
  props: {
  },
  data () {
    return {
      letter: '',
      name: '',
      showProfile: false,
      userData: {
        Email: '',
        Password: ''
      }
    }
  },
  methods: {
    cerrarSesion () {
      console.log('vamos a cerrar sesipon')
      localStorage.removeItem('userToken')
      localStorage.removeItem('user')
      this.showProfile = false
      window.location.replace('#/login')
    }
  },
  created () {
    console.log('creacion de la navbar')
  },
  updated () {
    console.log('nada')
  }
}
