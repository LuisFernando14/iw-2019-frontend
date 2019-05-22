import './register.css'
// https://stackoverflow.com/questions/42903356/hide-vue-router-from-a-page
// https://getbootstrap.com/docs/4.0/utilities/sizing/
export default {
  name: 'Register',
  components: {},
  data () {
    return {
      user: {
        Email: '',
        Name: '',
        LastName: '',
        Password: ''
      },
      passwordConfirm: ''
    }
  },
  methods: {
    addUser () {
      if (this.passwordConfirm === this.user.Password) {
        this.$http.post('api/users/', this.user).then(res => {
          console.log(res)
          if (res.data.correct) {
            this.$notify({
              group: 'foo',
              position: 'top center',
              type: 'success',
              title: 'Mensaje del sistema',
              text: res.data.message
            })
            setTimeout(() => {
              this.$router.push('login')
            }, 1000)
          } else {
            this.$notify({
              group: 'foo',
              position: 'top center',
              type: 'warn',
              title: 'Mensaje del sistema',
              text: res.data.message
            })
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  },
  created () {
    console.log('hola en la creación de agregar usuario')
  }
}
