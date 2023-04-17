/* eslint-disable no-nested-ternary */

'use client'

/* eslint-disable react/jsx-no-useless-fragment */

import Link from 'next/link'
import Tilt from 'react-parallax-tilt'
import './LastProjects.css'
import { useWindowSize } from 'react-use'
import { useEffect, useState } from 'react'
import { hoverRepoImage, resetRepoImage, repoBackgroundImageUrl } from '@/util/homeExternalJavascript'
import useFetch from '@/hooks/useFetch'

const MainProjects = (props: any) => {
  const { data: dataLastRepos } = useFetch('https://api.github.com/users/henrique-magno-dev/repos', {
    headers: {
      Authorization: `Bearer ${ process.env.NEXT_PUBLIC_TOKEN_GIT }`,
    },
  })

  const [repoSearch, setRepoSearch] = useState()
  const { nameSearch, autocompleteSearch, categorySearch } = props.repoSearchProps

  const filteredRepos = () => {
    if (repoSearch) {
      const allRepos = dataLastRepos?.filter((repos) => repos.name.includes(nameSearch))
      if (nameSearch.length > 0) {
        if (autocompleteSearch && categorySearch) {}
        if (autocompleteSearch) {}
        if (categorySearch) {}

        return allRepos?.map((repo) => repo.name)
      }

      //
      //       if (autocompleteSearch) {
      //         if (nameSearch && categorySearch) {}
      //         if (nameSearch) {}
      //         if (categorySearch) {}
      //         dataLastRepos?.filter((repo) => repo.topics.includes(autocompleteSearch[0]))
      //       }
      //
      //       if (categorySearch) {
      //         if (autocompleteSearch && nameSearch) {}
      //         if (autocompleteSearch) {}
      //         if (nameSearch) {}
      //         dataLastRepos?.filter((repo) => repo.topics.includes(categorySearch))
      //       }
    }
  }

  useEffect(() => {
    setRepoSearch(props)

    const interval = setInterval(() => console.log(nameSearch), 1000)
    return () => clearInterval(interval)
  }, [repoSearch, props])

  const { width: windowWidth } = useWindowSize()

  const description = (repoIdx: any) => {
    const repoDesc = dataLastRepos[repoIdx].description.slice(0, dataLastRepos[repoIdx].description.indexOf('http'))
    if (windowWidth >= 1285) { return repoDesc.slice(0, 130) }
    if (windowWidth >= 1024) { return repoDesc.slice(0, 70) }
    return ''
  }

  return (

    <>
      {nameSearch?.length > 0 || categorySearch !== 'all' || autocompleteSearch?.length > 0
        ? filteredRepos()
        : dataLastRepos?.map((projeto: any, repoIdx: number) => {
          if (dataLastRepos[repoIdx].stargazers_count !== '0') {
            return (
              <div key={`last-projects-${ dataLastRepos[repoIdx].name }`}>
                <Tilt
                  glareEnable
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={windowWidth >= 768 ? 5 : 25}
                  perspective={1000}
                  glareMaxOpacity={0.1}
                  glareColor='#EBEAF0'
                  glareReverse
                  glareBorderRadius='1.5rem'
                >
                  <div
                    key={`last-projects-${ projeto }`}
                    className='projectBoxClass bg-[#0819416c] backdrop-blur-sm relative rounded-3xl border border-gray-800 p-4 lg:h-80  lg:p-4 '
                  >
                    <div className='flex items-center justify-center text-2xl font-black capitalize sm:mt-3 sm:text-center sm:text-xl md:mb-2 lg:h-1/6'>
                      {dataLastRepos[repoIdx].name.replace('-hm', '').replace('-', ' ')}
                    </div>
                    <div className='flex sm:flex-col md:flex-col lg:h-4/5 lg:flex-row'>
                      <div className='box-border sm:h-1/2 sm:w-full sm:px-10 sm:py-1 md:h-1/2 md:w-full md:py-2 lg:flex lg:h-full lg:w-1/2 lg:items-center lg:justify-center'>
                        <div className='rounded-3xl border border-gray-800 bg-black sm:m-auto sm:hidden sm:aspect-video sm:w-full md:m-auto md:aspect-video md:h-full lg:aspect-square lg:h-[90%]'>
                          <Link
                            href={`${ dataLastRepos[repoIdx].homepage }`}
                            id={`link-last-repo-${ repoIdx }`}
                            onMouseOver={() => { hoverRepoImage('last', repoIdx) }}
                            onMouseOut={() => { resetRepoImage('last', repoIdx) }}
                            className='relative flex items-center justify-center w-full h-full overflow-y-hidden rounded-3xl'
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              id={`img-last-repo-${ repoIdx }`}
                              src={repoBackgroundImageUrl(dataLastRepos, repoIdx)}
                              alt='Project Background'
                              className='absolute top-0 flex items-center justify-center text-gray-600 ease-in-out'
                            />
                          </Link>
                        </div>
                      </div>
                      <div className='sm:mt-3 sm:h-auto lg:w-1/2 lg:pl-2 '>
                        <div className=' lg:h-4/5'>
                          {
                          windowWidth >= 600
                            ? (
                              <div className='md:mt-1 lg:h-2/5 '>
                                <div
                                  tabIndex={0}
                                  className=' collapse rounded-3xl border-2  border-green-600 bg-[#040C15] text-white md:collapse-arrow lg:collapse-arrow  sm:text-center '
                                >
                                  <div className='font-thin text-medium text-white-400 collapse-title sm:px-0'>
                                    Recursos
                                  </div>
                                  <div className='collapse-content'>
                                    {dataLastRepos[repoIdx].topics.map((topic: Array<string>) => (
                                      <div key={`badge-lastP-${ topic }`} className='ml-1 text-white bg-gray-600 border-gray-800 badge'>
                                        #{topic}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )
                            : ''
                        }
                          <div className='mt-2 text-xs font-thin lg:h-2/5'>{description(repoIdx)}</div>
                          <div className='flex sm:mt-5 md:mt-5 md:h-1/5 lg:h-auto'>
                            <Link
                              href={`${ dataLastRepos[repoIdx].html_url }`}
                              className='w-1/2 h-full mr-2 font-black text-center text-blue-600 duration-500 bg-blue-600 border border-blue-600 rounded-2xl bg-opacity-5 hover:bg-opacity-10 sm:w-full sm:py-3 md:py-3'
                            >
                              Code
                            </Link>
                            <Link
                              href={`${ dataLastRepos[repoIdx].homepage }`}
                              className='w-1/2 h-full font-black text-center text-green-600 duration-500 bg-green-600 border border-green-600 rounded-2xl bg-opacity-5 hover:bg-opacity-10 sm:w-full sm:py-3 md:py-3'
                            >
                              Demo
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>
            )
          }
          return null
        })}
    </>
  )
}

export default MainProjects
