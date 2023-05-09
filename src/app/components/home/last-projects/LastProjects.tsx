import useLoading from '@/hooks/useLoading'
import { useEffect, useState } from 'react'
import { Pagination } from '@mui/material'
import useFetch from '@/hooks/useFetch'
import RepoSearch from '../repo-search/RepoSearch'
import LastProjectsLayout from './last-projects-layout/LastProjectsLayout'

const LastProjects = () => {
  const { data: dataLastRepos } = useFetch('https://api.github.com/users/henrique-magno-dev/repos', {
    headers: {
      Authorization: `Bearer ${ process.env.NEXT_PUBLIC_TOKEN_GIT }`,
    },
  })
  const [filterValue, setFilterValue] = useState('')

  const handleSearch = (searchState: any) => {
    setFilterValue(searchState)
  }

  const [numberOfPages, setNumberOfPages] = useState(0)
  const [activePage, setActivePage] = useState(1)
  const [isFiltering, setIsFiltering] = useState(false)

  useEffect(() => {
    const pagination = Math.ceil(dataLastRepos?.length / 4)
    setNumberOfPages(pagination)
  }, [filterValue, dataLastRepos])

  const { data: displayRepos } = useFetch(
    `https://api.github.com/users/henrique-magno-dev/repos?per_page=4&page=${ activePage }`,
    {
      headers: {
        Authorization: `Bearer ${ process.env.NEXT_PUBLIC_TOKEN_GIT }`,
      },
    },
  )

  return (
    <div
      id='lastProjectSection'
      className='container grid grid-cols-2 gap-4 mx-auto mb-10 paddingClamp md:px-50 sm:grid-cols-3 lg:px-0 xl:px-52 2lg:px-0 '
    >

      <div className='col-span-2 m-auto sm:col-span-3'>{useLoading('lastProjectSection')}</div>
      <div
        className='relative w-full col-span-2 px-10 py-5 m-auto bg-gray-300 rounded-3xl sm:col-span-3'
      >
        <div
          className={` ${ isFiltering ? 'w-full h-full absolute left-0 top-0 z-40' : 'none' }`}
        />
        <RepoSearch
          onSearch={handleSearch}
          filterValue={filterValue}
          setIsFiltering={setIsFiltering}
          isFiltering={isFiltering}
        />

      </div>

      <LastProjectsLayout repoData={isFiltering ? dataLastRepos : displayRepos} repoSearchProps={filterValue} />

      <div className='flex items-center justify-center w-full col-span-2 py-5 bg-gray-300 sm:col-span-3 rounded-3xl'>

        {/* <Pagination
          count={isFiltering ? 1 : numberOfPages}
          onChange={(element, activeValue) => setActivePage(activeValue)}
          id='pagination'
          variant='outlined'
          color='primary'
        /> */}

      </div>
    </div>
  )
}

export default LastProjects
