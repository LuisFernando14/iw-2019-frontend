import './login.css'

export default {
  name: 'Login',
  components: {},
  data () {
    return {
      login: {
        Email: '',
        Password: ''
      }
    }
  },
  methods: {
    iniciarSesion () {
      console.log('vamos a iniciar sesión')
      this.$http.post('api/users/login', this.login).then(res => {
        console.log(res)
        if (res.data.correct) {
          localStorage.setItem('user', JSON.stringify(res.data.userData))
          localStorage.setItem('userToken', res.data.token)
          setTimeout(() => {
            // this.$router.push('dashboard')
            window.location.replace('#/dashboard')
          }, 500)
        } else {
          this.$notify({
            group: 'foo',
            position: 'top center',
            type: 'warn',
            title: 'Mensaje del sistema',
            text: 'Usuario y/o contraseña incorrectos'
          })
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  created () {
    console.log('hola en la creación')
  }
}
