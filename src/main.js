import Vue from "vue";
import App from "./App";
import CustomDropdown from "./components/CustomDropdown";
import eventBus from "./plugins/eventBus";
import clickOutside from "./directives/clickOutside";

Vue.use(eventBus);
Vue.directive("click-outside", clickOutside);
Vue.component("custom-dropdown", CustomDropdown);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount("#app");
