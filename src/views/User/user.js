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
        this.user.password = ''
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
      console.log(this.user)
      this.$http.put(`/api/users/${this.user.email}`, this.user).then(res => {
        if (res.data.correct) {
          window.location.replace('#/profile')
          this.$notify({
            group: 'foo',
            position: 'top center',
            type: 'success',
            title: 'Mensaje del sistema',
            text: 'Usuario actualizado correctamente'
          })
        }
      }).catch((error) => {
        this.$notify({
          group: 'foo',
          position: 'top center',
          type: 'success',
          title: 'Ha ocurrido un error',
          text: error
        })
      })
    },
    deleteProfile () {
      this.$http.delete(`/api/users/${this.user.email}`).then(res => {
        if (res.data.correct) {
          window.location.replace('#/signup')
        }
      }).catch((error) => {
        this.$notify({
          group: 'foo',
          position: 'top center',
          type: 'success',
          title: 'Ha ocurrido un error',
          text: error
        })
      })
    }
  },
  created () {
    console.log('hola en la creación del dashboard')
  }
}
