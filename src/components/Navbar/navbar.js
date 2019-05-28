import './navbar.css'
// https://stackoverflow.com/questions/42903356/hide-vue-router-from-a-page

export default {
  name: 'Navbar',
  mounted () {
    this.letter = JSON.parse(localStorage.getItem('user')).name.charAt(0).toUpperCase()
    this.name = JSON.parse(localStorage.getItem('user')).name
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
    logOut () {
    }
  },
  created () {
    console.log('hola en la creación de agregar usuario')
  }
}
