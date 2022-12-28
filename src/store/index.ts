import { defineStore } from "pinia"

export const useStore = defineStore("location", {
  state: () => ({
    // 返回一个对象的简便方法
    _city: "",
    _address: "",
  }),
  getters: {
    city: (state) => state._city,
    address: (state) => state._address,
  },
  actions: {
    handleCity(city: string) {
      if (city) {
        this._city = city;
      } else {
        this._city = "";
      }
    },
    handleAddress(address: string) {
      if (address) {
        this._address = address;
      } else {
        this._address = "";
      }
    },
  },
});