/* eslint-disable jsx-a11y/label-has-associated-control */

import { Button, TextField } from '@mui/material'
import { useReducer, useEffect, useRef } from 'react'
import './RepoSearch.css'
import { Anek_Telugu } from '@next/font/google'
import useFetch from '@/hooks/useFetch'
import TechsCheckbox from './techs-checkbox/TechsChekbox'

const initialState = {
  nameSearch: '',
  autocompleteSearch: [],
  categorySearch: 'all'
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_NAME_SEARCH':
      return { ...state, nameSearch: action.payload }
    case 'SET_TECHS_SEARCH':
      return { ...state, autocompleteSearch: action.payload }
    case 'SET_CATEGORY_SEARCH':
      return { ...state, categorySearch: action.payload }
    default:
      return state
  }
}

const RepoSearch = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const reset = useRef(null)

  const resetSearchByName = () => reset.current.click()

  useEffect(() => {
    props.onSearch(state)
  }, [])

  const setNameSearch = (name: string) => {
    dispatch({ type: 'SET_NAME_SEARCH', payload: name })
  }

  const setAutocompleteSearch = (techs: string[]) => {
    dispatch({ type: 'SET_TECHS_SEARCH', payload: techs })
  }

  const setCategorySearch = (category: string) => {
    dispatch({ type: 'SET_CATEGORY_SEARCH', payload: category })
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        props.onSearch(state)
      }}
      className='relative flex justify-between dark:text-black sm:flex-col md:flex-col  lg:flex-row'
    >
      <div className='w-full text-center sm:mb-5 sm:p-0 md:mb-5 md:p-0 lg:p-10 '>
        <p className='mb-10 font-black uppercase sm:mb-2 md:mb-2'> Pesquisa por nome </p>

        <div className='w-full '>
          <TextField id='searchByName' className='w-full border-2 bg-white' onChange={(event) => setNameSearch(event.target.value)} />
        </div>
      </div>

      <div className='h-full w-full flex-col gap-2 text-center sm:p-0 md:p-0 lg:p-10'>
        <p className='mb-10 font-black uppercase sm:mb-2 md:mb-2'>Pesquisa por tecnologia</p>

        <TechsCheckbox onSelectedTechsChange={setAutocompleteSearch} />
      </div>

      <div className='relative flex w-full flex-col gap-1 p-5'>
        <p className='mb-3 font-black uppercase'>Pesquisa por categoria</p>
        <label>
          <input ref={reset} className='mr-2' type='radio' name='stack' value='all' onChange={() => setCategorySearch('all')} />
          Todos
        </label>

        <label>
          <input className='mr-2' type='radio' name='stack' value='full-stack' onChange={() => setCategorySearch('full-stack')} />
          Full-Stack
        </label>

        <label>
          <input className='mr-2' type='radio' name='stack' value='front-end' onChange={() => setCategorySearch('front-end')} />
          Front-End
        </label>

        <label>
          <input className='mr-2' type='radio' name='stack' value='back-end' onChange={() => setCategorySearch('back-end')} />
          Back-End
        </label>
      </div>

      {props.isFiltering ? (
        <button
          type='submit'
          className='absolute right-5 bottom-5 z-40 rounded-xl border-2 border-red-600 bg-red-600 bg-opacity-10 px-6 py-2 font-black text-red-600 duration-500 hover:bg-opacity-20'
          onClick={() => {
            const autocompleteCleaner = document.querySelector('button[title="Clear"]')

            if (autocompleteCleaner) {
              autocompleteCleaner.click()
            }

            setAutocompleteSearch([])

            const resetNameSearch = document.getElementById('searchByName')
            resetNameSearch.value = ''

            setNameSearch('')
            resetSearchByName()
            props.setIsFiltering(!props.isFiltering)
          }}
        >
          Limpar
        </button>
      ) : (
        <button
          type='submit'
          className='absolute right-5 bottom-5 rounded-xl border-2 border-info bg-info bg-opacity-20 px-6 py-2 font-black text-info duration-500 hover:bg-opacity-30 dark:border-blue-600  dark:bg-blue-600 dark:bg-opacity-5 dark:text-blue-600 dark:hover:bg-opacity-20'
          onClick={() => {
            props.setIsFiltering(!props.isFiltering)
          }}
        >
          Filtrar
        </button>
      )}
    </form>
  )
}

export default RepoSearch
