import { CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'

const useLoading = (elementId: string) => {
  const [isThereContent, setIsThereContent] = useState(false)

  useEffect(() => {
    const loadingRepos = () => {
      if (typeof window !== 'undefined') {
        const childCount = window.document.getElementById(elementId)
        if (childCount !== null && childCount.childElementCount >= 2) {
          setIsThereContent(true)
        }
      }
    }
    const intervalFetching = setInterval(() => {
      loadingRepos()
    }, 1000)

    if (isThereContent !== false) {
      clearInterval(intervalFetching)
    }
  }, [isThereContent, elementId])

  if (!isThereContent) {
    return <CircularProgress sx={{ color: 'white', width: '100%', margin: 'auto'}} />
  }

  if (isThereContent) {
    return ''
  }
}
export default useLoading
