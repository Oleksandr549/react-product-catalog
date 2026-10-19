const BASE_URL = 'https://dummyjson.com'

export async function request<T>(path: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, { signal })

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return response.json()
}
