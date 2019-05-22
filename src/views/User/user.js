import './user.css'

export default {
  name: 'User',
  mounted () {
    this.getProfile()
  },
  components: {},
  data () {
    return {
      buttonTitle: 'Editar perfil',
      update: false,
      user: {
        email: '',
        lastname: '',
        name: '',
        password: ''
      }
    }
  },
  methods: {
    getProfile () {
      console.log('vamos a obtener el perfil de usuario')
      const userEmail = JSON.parse(localStorage.getItem('user'))
      this.$http.get(`/api/users/${userEmail.email}`).then(res => {
        console.log('en la petiion')
        console.log(res.data)
        this.user = res.data.userData
      }).catch((error) => {
        console.log(error)
      })
    },
    manageProfile () {
      if (!this.update) {
        this.update = true
        this.buttonTitle = 'Actualizar perfil'
        return
      }
      console.log('vamos a actualizar')
    }
  },
  created () {
    console.log('hola en la creación del dashboard')
  }
}
