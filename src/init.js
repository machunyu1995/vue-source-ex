import { initState } from './state'
export function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    //用于初始化操作
    const vm = this;
    vm.$options = options;
    initState(vm);
  };
}
