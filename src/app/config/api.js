export default async function client(endpoint, method = "GET", body) {
    // const baseUrl = "http://localhost:3001/pub"
    const baseUrl = "https://p3c1-server.hrndbrs.my.id/pub"


    const config = {
        method,
    }

    if (body) config.body = body

    const res = await fetch(baseUrl + endpoint, config)
    const data = await res.json()

    if (!res.ok) throw data
    return data
}