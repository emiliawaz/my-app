const formatDate = value => {
  let date,
      dateFormatted

  date = new Date(value)
  dateFormatted = date.toISOString().replace(/T.*/,'').split('-').reverse().join('-')

  return dateFormatted
}

export default formatDate