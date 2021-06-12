import Vue from "vue"
import App from "./App.vue"
import CustomDropdown from "@/components/CustomDropdown.vue"
import eventBus from "./plagins/eventBus"

Vue.use(eventBus)
Vue.component("custom-dropdown", CustomDropdown)

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount("#app")
