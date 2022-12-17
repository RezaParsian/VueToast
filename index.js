import Vue from 'vue';
import toast from './toast'

let ComponentClass = Vue.extend(toast);
let instance = new ComponentClass();
instance.$mount()

const component = {
    install() {
        document.body.appendChild(instance.$el);
    }
};

Vue.use(component);

export default component;
