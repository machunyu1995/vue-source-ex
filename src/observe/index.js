class Observer {
  constructor(data) {
    // object.defineproperty 只能劫持已经存在得属性，为此vue需要重新定义一些api
    if (Array.isArray(data)) {
    } else {
      this.walk(data);
    }
  }
  walk(data) {
    // 重新定义属性，性能低
    Object.keys(data).forEach((key) => defineReactive(data, key, data[key]));
  }
}

// 这个为什么是闭包呢
export function defineReactive(target, key, value) {
  // Object.defineProperty的作用是在对象上重新定义一个属性，或者修改已存在的属性 
  Object.defineProperty(target, key, {
    get: function () {
      return value;
    },
    set: function (newValue) {
      if (newValue === value) return
      value = newValue;
    },
  });
}

export function observe(data) {
  if (typeof data !== "object" || data === null) {
    return;
  }
  // 如果一个对象被劫持过，那就不需要再次被劫持，可以创建一个实例，用实例判断对象是否被劫持过
  return new Observer(data);
}
