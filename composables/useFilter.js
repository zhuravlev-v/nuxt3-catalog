export const useFilter = (flats, filtersStore) => {
  const {
    filterObjects,
    filterTypes,
    filterRangeArea,
    filterRangePrice,
    filterRoominess,
    filterSorter,
  } = toRefs(filtersStore)

  const filteredFlats = computed(() => {
    let flatsCopy = flats

    // by Objects
    if (filterObjects.value.objectsValue !== 'all') {
      flatsCopy = flatsCopy.filter(flat => flat.objectName === filterObjects.value.objectsValue)
    }

    // by Type
    if (filterTypes.value.typesValue !== 'all') {
      flatsCopy = flatsCopy.filter(flat => flat.type === filterTypes.value.typesValue)
    }

    // by Area
    flatsCopy = flatsCopy.filter(flat => {
      return flat.area > filterRangeArea.value.areaMinMax[0] && flat.area < filterRangeArea.value.areaMinMax[1]
    })

    // by Price
    flatsCopy = flatsCopy.filter(flat => {
      return trimSpacesAll(flat.price) >= filterRangePrice.value.priceMinMax[0] && trimSpacesAll(flat.price) <= filterRangePrice.value.priceMinMax[1]
    })

    // by Roominess
    flatsCopy = flatsCopy.filter(flat => {
      if (filterRoominess.value.roominessValue.length === 0) {
        return flat
      }
      else if (filterRoominess.value.roominessValue.includes('3+')) {
        return filterRoominess.value.roominessValue.includes(flat.rooms) || flat.rooms >= 3
      }
      else {
        return filterRoominess.value.roominessValue.includes(flat.rooms)
      }
    })

    // by Sorter
    const sorterValue = filterSorter.value.sortersValue
    const ascending = filterSorter.value.sorters.find(sorter => sorter.id === sorterValue).ascent

    flatsCopy.sort((flat1, flat2) => {
      if (ascending) {
        return trimSpacesAll(flat1[sorterValue]) - trimSpacesAll(flat2[sorterValue])
      }
      else {
        return trimSpacesAll(flat2[sorterValue]) - trimSpacesAll(flat1[sorterValue])
      }
    })

    return flatsCopy
  })

  return filteredFlats
}