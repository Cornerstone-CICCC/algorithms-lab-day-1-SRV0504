// Exercise 10: Write a function named 'formatDate' that takes a date string (in the format 'YYYY-MM-DD') and returns a formatted date string (e.g., 'January 1, 2022').

function formatDate(dateStr) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  let parts = dateStr.split("-")
  let year = parts[0]
  let month = parseInt(parts[1])
  let day = parseInt(parts[2])

  return months[month - 1] + " " + day + ", " + year
}

console.log(formatDate('2022-01-01')) // 'January 1, 2022'