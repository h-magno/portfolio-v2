'use client'

import './LastProjects.css'
import { filteredRepos } from '@/util/homeExternalJavascript'
import LastProjectsBox from './last-projects-box/LastProjectsBox'

const LastProjectsLayout = (props: any) => {
  const { nameSearch, autocompleteSearch, categorySearch } = props.repoSearchProps

  const filteredSearch = filteredRepos(props.repoData, nameSearch, autocompleteSearch, categorySearch)

  return (

    <div
      id='LastProjectsLayout'
      className='container grid  col-span-2 gap-4 mx-auto mb-10 paddingClamp md:px-50   grid-cols-2  sm:gap-2 lg:px-0  sm:col-span-3'
    >
      {nameSearch?.length > 0 || categorySearch !== 'all' || autocompleteSearch?.length > 0
        ? <LastProjectsBox finalData={filteredSearch} />
        : <LastProjectsBox finalData={props.repoData} />}
    </div>
  )
}

export default LastProjectsLayout
