import { useEffect, useState } from 'react'

const useFetch = (url: string, options: any = {}) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    fetch(`${ url }`, { signal: controller.signal, ...options })
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [url])

  return { data, loading, error }
}

export default useFetch
