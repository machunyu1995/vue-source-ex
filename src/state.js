// 对数据进行劫持
export function initState(vm) {
  const opts = vm.$options;
  if (opts.data) {
    initData(vm);
  }
}

function initData(vm) {
  let data = vm.$options.data;
  // data可能是函数 也可能是对象
  data = vm._data = typeof data === "function" ? getData(data, vm) : data || {};
  observe(data)
}

export function getData(data, vm) {
  // 调用data函数，将this指向vm(data中可能使用this.xxxx)
  return data.call(vm);
}
