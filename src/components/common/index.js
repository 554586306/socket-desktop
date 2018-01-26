import Floder from './Floder';

const myView = {
    Floder
}

const install = function(Vue, opts = {}){
	if (install.installed) return;
    
    Object.keys(myView).forEach(key => {
        Vue.component(key, myView[key]);
    });

    Vue.prototype.$floder = Floder;
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
	version:'1.0',
	install,
	...myView
}

export default API;
//module.exports.default = module.exports = API;	// eslint-disable-line no-undef