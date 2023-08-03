import { defineStore } from 'pinia'
import { useFlatsStore } from '@/store/flats'

export const useFiltersFlatsStore = defineStore('filtersFlats', () => {
  const filterObjects = computed(() => {
    const store = useFlatsStore()
    const flatsObjects = store.flatsObjects

    const objectsValue = ref('all')
    const objectsOptions = ref([
      { value: 'all', label: 'Любой' },
      ...flatsObjects.map(object => ({ value: object, label: object }))
    ])

    return reactive({
      objectsValue,
      objectsOptions
    })
  })

  const filterTypes = computed(() => {
    const store = useFlatsStore()
    const flatsTypes = store.getArrayOfProperties('type')

    const typesValue = ref('all')
    const typesOptions = ref([
      { value: 'all', label: 'Любой' },
      ...flatsTypes.map(type => ({ value: type, label: type }))
    ])

    return reactive({
      typesValue,
      typesOptions
    })
  })

  const filterRoominess = computed(() => {
    const roominessValue = ref(['Ст'])
    const rooms = ['Ст', '1', '2', '3+']

    return reactive({
      roominessValue,
      rooms
    })
  })

  const filterViews = computed(() => {
    const togglerViews = ref(['card', 'list'])
    const togglerValue = ref(togglerViews.value[0])

    return reactive({
      togglerValue,
      togglerViews
    })
  })

  const flatsStore = useFlatsStore()

  const areaRange = flatsStore.getRangeProperty('area')
  const areaMinMax = ref(areaRange.value.map((item, i) => {
    return i === 0 ? Math.floor(item) : Math.ceil(item)
  }))
  const areaMin = ref(areaMinMax.value[0] || 0)
  const areaMax = ref(areaMinMax.value[1] || 0)
  const filterRangeArea = reactive({ areaMinMax, areaMin, areaMax })


  const priceRange = flatsStore.getRangeProperty('price')
  const priceMinMax = ref(priceRange.value.map((item, i) => {
    return i === 0 ? Math.floor(item) : Math.ceil(item)
  }))
  const priceMin = ref(priceMinMax.value[0] || 0)
  const priceMax = ref(priceMinMax.value[1] || 0)
  const filterRangePrice = reactive({ priceMinMax, priceMin, priceMax })

  const sortersValue = ref('price')
  const sorters = ref([
    {
      label: 'по цене',
      id: 'price',
      ascent: true,
    },
    {
      label: 'по площади',
      id: 'area',
      ascent: false,
    },
  ])
  const filterSorter = reactive({ sortersValue, sorters })

  const toggleSorter = (id) => {
    if (id === sortersValue.value) {
      const targetIndex = sorters.value.findIndex(sorter => sorter.id === id)
      sorters.value[targetIndex].ascent = !sorters.value[targetIndex].ascent
    }
    else {
      sortersValue.value = id
    }
  }

  return {
    filterObjects,
    filterTypes,
    filterRoominess,
    filterRangeArea,
    filterRangePrice,
    filterViews,
    filterSorter,
    // sorters,
    // sortersValue,
    toggleSorter,
  }
})