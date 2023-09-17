export function convertDate(dateString) {
  var date = dateString.split(/\D/g)
  return [date[2], date[1], date[0]].join('-')
}
