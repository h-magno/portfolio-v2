/* eslint-disable react/jsx-no-useless-fragment */

'use client'

import Link from 'next/link'
import Tilt from 'react-parallax-tilt'
import './MainProjects.css'
import useFetch from '@/hooks/useFetch'
import { hoverRepoImage, repoBackgroundImageUrl, resetRepoImage } from '@/util/homeExternalJavascript'

const MainProject = () => {
  const { data: dataMainRepos } = useFetch('https://api.github.com/users/henrique-magno-dev/repos', {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_GIT}`
    }
  })

  interface IDataProject {
    name: string
    title: string
    description: string
    image: string
    link: string
    topics: string[]
    html_url: string
    homepage: string
    stargazers_count: string
  }

  return (
    <>
      {dataMainRepos?.map((projeto: IDataProject, repoIdx: number) => {
        if (parseFloat(projeto.stargazers_count) === 1) {
          return (
            <div key={`main-projects-${projeto.name}`} className='sm:px-5 md:px-16'>
              <Tilt
                glareEnable
                tiltMaxAngleX={0.5}
                tiltMaxAngleY={0.5}
                perspective={1000}
                glareMaxOpacity={0.1}
                glareColor='#EBEAF0'
                glareReverse
                glareBorderRadius='1.5rem'
              >
                <div className='m-auto flex w-full rounded-3xl border border-gray-300 border-opacity-50 bg-[#462f3f4e]  backdrop-blur-sm dark:border-gray-800 dark:bg-[#0819412c] sm:h-auto sm:flex-col md:flex-col lg:h-[500px] lg:flex-row'>
                  <div className='box-border sm:h-1/2 sm:w-full sm:px-10 sm:py-2 md:h-1/2 md:w-full md:py-2 md:px-10 lg:flex lg:h-full lg:w-1/2 lg:items-center lg:justify-center'>
                    <div className='rounded-3xl  bg-black dark:border-gray-800 sm:m-auto sm:aspect-video sm:h-full sm:w-full md:m-auto md:aspect-video  md:h-full md:rounded-3xl lg:aspect-square lg:h-[90%]'>
                      <Link
                        href={`${projeto.homepage}`}
                        id={`link-main-repo-${repoIdx}`}
                        onMouseOver={() => hoverRepoImage('main', repoIdx)}
                        onMouseOut={() => resetRepoImage('main', repoIdx)}
                        className='relative flex h-full w-full items-center justify-center overflow-y-hidden rounded-3xl'
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          id={`img-main-repo-${repoIdx}`}
                          src={repoBackgroundImageUrl(projeto)}
                          alt='Project Background'
                          className='absolute top-0 flex items-center justify-center text-gray-600 ease-in-out'
                        />
                      </Link>
                    </div>
                  </div>
                  <div className=' sm:h-1/2 sm:w-full md:h-1/2 md:w-full lg:flex lg:h-full lg:w-1/2 lg:items-center lg:justify-center lg:pr-10'>
                    <div className=' sm:h-full sm:px-10 md:h-full md:px-10 lg:h-[90%] lg:w-full'>
                      <h2 className='flex h-1/5 items-center justify-center text-center text-4xl font-black capitalize sm:my-5 md:my-5'>
                        {projeto.name.replace('-hm', '').replace('-', ' ')}
                      </h2>
                      <div className='h-1/5'>
                        <div
                          tabIndex={0}
                          className='collapse-arrow collapse rounded-3xl border-gray-900 bg-gray-300 text-gray-900 dark:border dark:border-emerald-600 dark:bg-[#040C15]   dark:text-white '
                        >
                          <div className='text-medium  collapse-title font-bold'>Recursos</div>
                          <div className='collapse-content'>
                            {projeto.topics.map((topics: string) => (
                              <div key={`badge-${topics}`} className='badge ml-1 border-none bg-gray-600 text-white'>
                                #{topics}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className='flex h-2/5 justify-center font-black dark:font-normal sm:my-10 sm:items-center md:my-10 md:items-center lg:my-0 lg:items-start'>
                        {/* // ! quebrando quando não há descrição no repositório - null */}
                        {projeto.description.slice(0, projeto.description.indexOf('http')).substring(0, 184)}
                      </div>
                      <div className='flex h-1/5 items-center justify-center sm:my-5 md:my-5 lg:my-0 lg:pb-10'>
                        <Link
                          href={`${projeto.html_url}`}
                          className='mr-2 w-1/2 rounded-2xl border-2  border-indigo-600 bg-indigo-600 bg-opacity-20 text-center font-black text-indigo-600  duration-500  hover:bg-opacity-30  dark:border-blue-600 dark:bg-blue-600 dark:bg-opacity-5 dark:text-blue-600 dark:hover:bg-opacity-10 sm:py-3 md:py-3'
                        >
                          Code
                        </Link>
                        <Link
                          href={`${projeto.homepage}`}
                          className='w-1/2 rounded-2xl border-2 border-red-800 bg-red-800 bg-opacity-20 text-center font-black text-red-800 duration-500 hover:bg-opacity-30 dark:border-emerald-600 dark:bg-emerald-600 dark:bg-opacity-5 dark:text-emerald-600 dark:hover:bg-opacity-10 sm:py-3 md:py-3'
                        >
                          Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          )
        }
        return ''
      })}
    </>
  )
}

export default MainProject
