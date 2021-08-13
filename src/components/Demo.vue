<template>
  <div style="padding: 32px">
    <div style="margin-bottom: 24px">
      <span>
        asyncFunc: {{ asyncFunc(value) }}
      </span>
      <br>
      <br>
      <span>
        promiseFunc: {{ promiseFunc(value) }}
      </span>
    </div>
    <div>
      <span>
        sync asyncFunc: <span v-sync="asyncFunc(value)"/>
      </span>
      <br>
      <br>
      <span>
        sync promiseFunc: <span v-sync.update="promiseFunc(value)"/>
      </span>
      <br>
      <br>
      <span>
        sync promiseFunc: <span v-sync="asyncFunc(value)" :key="`${value}`" />
      </span>
    </div>
    <br>
    <br>

    <button @click="value++">
      value++
    </button>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
      value: 0
    }
  },
  methods: {
    async asyncFunc(value) {
      return await this.getValuePlus(value)
    },
    promiseFunc(value) {
      return new Promise(resolve => resolve(++value))
    },
    async getValuePlus(value) {
      return ++value
    }
  }
}
</script>
