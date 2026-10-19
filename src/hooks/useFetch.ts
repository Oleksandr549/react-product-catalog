import { useEffect, useState } from 'react'

type Fetcher<T> = (signal: AbortSignal) => Promise<T>

interface FetchResult<T> {
  fetcher: Fetcher<T> | null
  data: T | null
  error: Error | null
}

export function useFetch<T>(fetcher: Fetcher<T>) {
  const [result, setResult] = useState<FetchResult<T>>({
    fetcher: null,
    data: null,
    error: null,
  })

  useEffect(() => {
    const controller = new AbortController()

    fetcher(controller.signal)
      .then((data) => {
        setResult({ fetcher, data, error: null })
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return
        const normalized = error instanceof Error ? error : new Error('Unknown error')
        setResult({ fetcher, data: null, error: normalized })
      })

    return () => controller.abort()
  }, [fetcher])

  const loading = result.fetcher !== fetcher

  return {
    data: loading ? null : result.data,
    error: loading ? null : result.error,
    loading,
  }
}
