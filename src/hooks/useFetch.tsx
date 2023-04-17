import { useEffect, useState } from 'react'

const useFetch = (url: string, props: any = {}) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const controller = new AbortController()

  useEffect(() => {
    setLoading(true)

    fetch(`${ url }`, { signal: controller.signal, ...props })
      .then((res) => res.json())
      .then((dataFetch) => setData(dataFetch))
      .catch(setError)
      .finally(() => setLoading(false))

    return () => controller.abort()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return { data, loading, error }
}

export default useFetch
