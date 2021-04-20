function createConfig (username, password, url, method, data) {
  const token = `${username}:${password}`
  const encodedToken = Buffer.from(token).toString('base64')
  return { method, url, data, headers: { 'Authorization': 'Basic ' + encodedToken } }
}

export default createConfig
