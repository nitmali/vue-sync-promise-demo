/**
 * 使用方法 v-sync.update:arg='value'
 * update - 所在组件的 VNode 更新时同步更新
 * arg - 插入的DOM属性，未传入时以innerText方式插入
 * value - Promise方法 | 普通方法 | 值
 */
const install = (Vue) => {
  Vue.directive('sync', {
    async bind(el, binding, node) {
      await doWork(el, binding, node)
    },
    async update(el, binding, node) {
      if (binding.modifiers.update) {
        await doWork(el, binding, node)
      }
    }
  })
}

const doWork = async(el, binding, node) => {
  const attribute = binding.arg
  const value = binding.value
  let _value = ''
  // 判断Promise类型
  if (value instanceof Promise) {
    _value = await value
  } else {
    _value = value
  }
  if (!attribute) {
    el.innerText = _value
  } else {
    el.setAttribute(attribute, _value)
  }
}

export default install
