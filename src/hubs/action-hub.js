import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr'

export default {
  install (Vue) {
    const connection = new HubConnectionBuilder()
      .withUrl(`${Vue.prototype.$http.defaults.baseURL}/action-hub`)
      .configureLogging(LogLevel.Information)
      .build()

    const actionHub = new Vue() // use new Vue instance as an event bus

    // Forward hub events through the event, so we can listen for them in the Vue components
    connection.on('DeviceIsOnChange', (device) => {
      actionHub.$emit('isOn-changed', { device })
    })
    connection.on('DeviceStatusChange', (questionId, answerCount) => {
      actionHub.$emit('status-changed', { questionId, answerCount })
    })
    /*
    connection.on('AnswerAdded', answer => {
      actionHub.$emit('answer-added', answer)
    })
    */
    // Provide methods for components to send messages back to server
    // Make sure no invocation happens until the connection is established
    actionHub.dashboardOpened = (userId) => {
      return startedPromise
        .then(() => connection.invoke('JoinDashboardGroup', userId))
        .catch(console.error)
    }
    actionHub.dashboardClosed = (userId) => {
      return startedPromise
        .then(() => connection.invoke('LeaveDashboardGroup', userId))
        .catch(console.error)
    }

    // Add the hub to the Vue prototype, so every component can listen to events or send new events using this.$questionHub
    Vue.prototype.$actionHub = actionHub

    // You need to call connection.start() to establish the connection
    // the client wont handle reconnecting for you! Docs recommend listening onclose
    // and handling it there. This is the simplest of the strategies
    let startedPromise = null
    function start () {
      startedPromise = connection.start()
        .catch(err => {
          console.error('Failed to connect with hub', err)
          return new Promise((resolve, reject) => setTimeout(() => start().then(resolve).catch(reject), 5000))
        })
      return startedPromise
    }
    connection.onclose(() => start())

    start()
  }
}
