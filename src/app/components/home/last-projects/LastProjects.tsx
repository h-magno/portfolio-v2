'use client'

import './LastProjects.css'
import { useEffect, useState } from 'react'
import useFetch from '@/hooks/useFetch'
import { filteredRepos } from '@/util/homeExternalJavascript'
import LastProjectsBox from './last-projects-box/LastProjectsBox'

const LastProjects = (props: any) => {
  const { data: dataLastRepos } = useFetch('https://api.github.com/users/henrique-magno-dev/repos', {
    headers: {
      Authorization: `Bearer ${ process.env.NEXT_PUBLIC_TOKEN_GIT }`,
    },
  })

  const [repoSearch, setRepoSearch] = useState()
  const { nameSearch, autocompleteSearch, categorySearch } = props.repoSearchProps

  useEffect(() => {
    // const test =

    setRepoSearch((actualInput) => actualInput += filteredRepos(dataLastRepos, repoSearch, nameSearch, autocompleteSearch, categorySearch))
    const interval = setInterval(() => console.log(repoSearch), 1000)
    return () => clearInterval(interval)
  }, [repoSearch, props])

  const filteredSearch = filteredRepos(dataLastRepos, repoSearch, nameSearch, autocompleteSearch, categorySearch)

  return (

    <>
      {nameSearch?.length > 0 || categorySearch !== 'all' || autocompleteSearch?.length > 0
        ? <LastProjectsBox finalData={filteredSearch} />
        : <LastProjectsBox finalData={dataLastRepos} />}
    </>
  )
}

export default LastProjects
