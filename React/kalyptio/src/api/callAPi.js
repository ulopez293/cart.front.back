
const callAPI = async (url, metodo) => {
  try {
      const response = await fetch(url, {
          method: metodo,
          headers: { 'Content-Type': 'application/json' }
      })
      const json = await response.json()
      if (response.ok) return json
  } catch (error) { console.log(error) }
}

export default callAPI