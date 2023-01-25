export function paginateArray(itemsPerGroup, array) {
  console.log('array:')
  console.log(array)
  const chunkSize = itemsPerGroup
  let groupedArray = []
  for (let i = 0; i < array.length; i += chunkSize) {
    let chunk = array.slice(i, i + chunkSize)
    groupedArray.push(chunk)
  }
  return groupedArray
}
