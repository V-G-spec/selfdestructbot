module.exports = {
  token: process.env.TOKEN,
  amounts: (process.env.AMOUNTS && process.env.AMOUNTS.split(' ')) || [3, 10, 60, 300, 600, 900, 1800] // list of amounts available (in seconds)
}
