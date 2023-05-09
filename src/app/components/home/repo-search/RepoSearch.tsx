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
  categorySearch: 'all',
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
      className='relative flex justify-between text-black'
    >

      <div className='w-full p-5 '>
        <p className='mb-10 font-black uppercase '> Pesquisa por nome </p>

        <div className='w-full'>
          <TextField
            id='searchByName'
            className='w-full bg-white border-2'
            onChange={(event) => setNameSearch(event.target.value)}
          />
        </div>
      </div>

      <div className='flex-col w-full h-full gap-2 p-5 file:flex'>
        <p className='mb-10 font-black uppercase'>Pesquisa por tecnologia</p>

        <TechsCheckbox onSelectedTechsChange={setAutocompleteSearch} />

      </div>

      <div className='relative flex flex-col w-full gap-1 p-5'>

        <p className='mb-3 font-black uppercase'>Pesquisa por categoria</p>
        <label>
          <input
            ref={reset}
            className='mr-2'
            type='radio'
            name='stack'
            value='all'
            onChange={() => setCategorySearch('all')}
          />
          Todos
        </label>

        <label>
          <input
            className='mr-2'
            type='radio'
            name='stack'
            value='full-stack'
            onChange={() => setCategorySearch('full-stack')}
          />
          Full-Stack
        </label>

        <label>
          <input
            className='mr-2'
            type='radio'
            name='stack'
            value='front-end'
            onChange={() => setCategorySearch('front-end')}
          />
          Front-End
        </label>

        <label>
          <input
            className='mr-2'
            type='radio'
            name='stack'
            value='back-end'
            onChange={() => setCategorySearch('back-end')}
          />
          Back-End
        </label>

      </div>

      {props.isFiltering ? (
        <button
          type='submit'
          className='absolute px-6 py-2 font-black text-red-500 bg-red-500 border-2 border-red-500 rounded-xl right-5 bottom-5 z-50 bg-opacity-10 hover:bg-opacity-20 duration-500'
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
        > Limpar
        </button>
      ) : (
        <button
          type='submit'
          className='absolute px-6 py-2 font-black text-blue-500 bg-blue-500 border-2 border-blue-500 rounded-xl right-5 bottom-5 bg-opacity-10 hover:bg-opacity-20 duration-500'
          onClick={() => {
            props.setIsFiltering(!props.isFiltering)
          }}
        > Filtrar
        </button>
      )}

    </form>
  )
}

export default RepoSearch
