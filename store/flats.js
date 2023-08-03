import { defineStore } from 'pinia'
import { useFetch } from '#imports'

export const useFlatsStore = defineStore('flats', () => {
  const flats = ref([])

  const length = computed(() => {
    return flats.value.length
  })

  const flatsObjects = computed(() => {
    return [...new Set(flats.value.map(flat => flat.objectName))]
  })

  const getRangeProperty = (property) => {
    const minMax = flats.value.reduce((arr, flat) => {
      const value = trimSpacesAll(flat[property])
 
      if (arr[0] === 0) arr[0] = value
      if (value < arr[0]) arr[0] = value
      if (value > arr[1]) arr[1] = value
      return arr
    }, [0, 0])
    return ref(minMax)
  }

  const getArrayOfProperties = (propName) => {
    return [...new Set(flats.value.map(flat => flat[propName]))]
  }

  const fetchFlats = async () => {
    const { data } = await useFetch('/api/flats')
    flats.value = data.value.flats
  }

  return { 
    flats,
    length,
    flatsObjects,
    fetchFlats,
    getRangeProperty,
    getArrayOfProperties
  }
})