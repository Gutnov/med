const baseUrl = "https://json.medrating.org"

export async function fetchData(endpoint = "") {
	let res = await fetch(baseUrl + endpoint)
	return await res.json()
}
