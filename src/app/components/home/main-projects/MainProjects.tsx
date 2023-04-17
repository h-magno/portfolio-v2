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
      Authorization: `Bearer ${ process.env.NEXT_PUBLIC_TOKEN_GIT }`,
    },
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
      {dataMainRepos?.map((_repo: IDataProject, repoIdx: number) => {
        if (parseFloat(dataMainRepos[repoIdx].stargazers_count) === 0) {
          return (
            <div key={`main-projects-${ dataMainRepos[repoIdx].name }`} className='md:px-16 sm:px-5'>
              <Tilt
                glareEnable
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1000}
                glareMaxOpacity={0.1}
                glareColor='#EBEAF0'
                glareReverse
                glareBorderRadius='1.5rem'
              >
                <div className='m-auto flex w-full rounded-3xl border border-gray-800 bg-[#0819416c] backdrop-blur-sm sm:h-auto sm:flex-col md:flex-col lg:h-[500px] lg:flex-row'>
                  <div className='box-border sm:h-1/2 sm:w-full sm:px-10 sm:py-2 md:h-1/2 md:w-full md:py-2 md:px-10 lg:flex lg:h-full lg:w-1/2 lg:items-center lg:justify-center'>
                    <div className='rounded-3xl border border-gray-800 bg-black sm:m-auto sm:aspect-video sm:h-full sm:w-full md:m-auto md:aspect-video  md:h-full md:rounded-3xl lg:aspect-square lg:h-[90%]'>
                      <Link
                        href={`${ dataMainRepos[repoIdx].homepage }`}
                        id={`link-main-repo-${ repoIdx }`}
                        onMouseOver={() => hoverRepoImage('main', repoIdx)}
                        onMouseOut={() => resetRepoImage('main', repoIdx)}
                        className='relative flex items-center justify-center w-full h-full overflow-y-hidden rounded-3xl'
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          id={`img-main-repo-${ repoIdx }`}
                          src={repoBackgroundImageUrl(dataMainRepos, repoIdx)}
                          alt='Project Background'
                          className='absolute top-0 flex items-center justify-center text-gray-600 ease-in-out'
                        />
                      </Link>
                    </div>
                  </div>
                  <div className=' sm:h-1/2 sm:w-full md:h-1/2 md:w-full lg:flex lg:h-full lg:w-1/2 lg:items-center lg:justify-center lg:pr-10'>
                    <div className=' sm:h-full sm:px-10 md:h-full md:px-10 lg:h-[90%] lg:w-full'>
                      <h2 className='flex items-center justify-center text-4xl font-black capitalize h-1/5 sm:my-5 md:my-5 '>
                        {dataMainRepos[repoIdx].name.replace('-hm', '').replace('-', ' ')}
                      </h2>
                      <div className='h-1/5'>
                        <div tabIndex={0} className=' collapse-arrow collapse rounded-3xl border-2 border-green-600 bg-[#040C15]  text-white '>
                          <div className='font-thin text-medium text-white-400 collapse-title'>Recursos</div>
                          <div className='collapse-content'>
                            {dataMainRepos[repoIdx].topics.map((topics: string) => (
                              <div key={`badge-${ topics }`} className='ml-1 text-white bg-gray-600 border-gray-800 badge'>
                                #{topics}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-center h-2/5 sm:my-10 sm:items-center md:my-10 md:items-center lg:my-0 lg:items-start'>
                        {/* // ! quebrando quando não há descrição no repositório - null */}
                        {dataMainRepos[repoIdx].description.slice(0, dataMainRepos[repoIdx].description.indexOf('http'))}
                      </div>
                      <div className='flex items-center justify-center h-1/5 sm:my-5 md:my-5 lg:my-0 lg:pb-10'>
                        <Link
                          href={`${ dataMainRepos[repoIdx].html_url }`}
                          className='w-1/2 mr-2 font-black text-center text-blue-600 duration-500 bg-blue-600 border border-blue-600 rounded-2xl bg-opacity-5 hover:bg-opacity-10 sm:py-3 md:py-3'
                        >
                          Code
                        </Link>
                        <Link
                          href={`${ dataMainRepos[repoIdx].homepage }`}
                          className='w-1/2 font-black text-center text-green-600 duration-500 bg-green-600 border border-green-600 rounded-2xl bg-opacity-5 hover:bg-opacity-10 sm:py-3 md:py-3'
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
