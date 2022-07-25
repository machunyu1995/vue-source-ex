(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

  // 对数据进行劫持
  function initState(vm) {
    var opts = vm.$options;

    if (opts.data) {
      initData(vm);
    }
  }

  function initData(vm) {
    var data = vm.$options.data; // data可能是函数 也可能是对象

    data = vm._data = typeof data === "function" ? getData(data, vm) : data || {};
    console.log(data);
  }

  function getData(data, vm) {
    // 调用data函数，将this指向vm(data中可能使用this.xxxx)
    return data.call(vm);
  }

  function initMixin(Vue) {
    Vue.prototype._init = function (options) {
      //用于初始化操作
      var vm = this;
      vm.$options = options;
      initState(vm);
    };
  }

  function Vue(options) {
    this._init(options);
  }

  initMixin(Vue);

  return Vue;

}));
//# sourceMappingURL=vue.js.map
