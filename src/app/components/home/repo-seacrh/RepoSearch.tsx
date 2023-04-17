/* eslint-disable jsx-a11y/label-has-associated-control */

import { TextField } from '@mui/material'
import { useReducer, useEffect } from 'react'
import './RepoSearch.css'
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

  useEffect(() => {
    props.onSearch(state)
  }, [state, props])

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
            className='w-full bg-white'
            onChange={(event) => setNameSearch(event.target.value)}
          />
        </div>
      </div>

      <div className='flex-col w-full h-full gap-2 p-5 file:flex'>
        <p className='mb-8 font-black uppercase'>Pesquisa por tecnologia</p>

        <TechsCheckbox onSelectedTechsChange={setAutocompleteSearch} />

      </div>

      <div className='relative flex flex-col w-full gap-1 p-5'>

        <p className='mb-3 font-black uppercase'>Pesquisa por categoria</p>
        <label>
          <input
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

      <button type='submit' className='absolute btn-success btn right-5 bottom-5'>
        Filtrar
      </button>
    </form>
  )
}

export default RepoSearch

// import { TextField } from '@mui/material'
// import { useState, useEffect } from 'react'
// import './RepoSearch.css'
// import TechsCheckbox from './techs-checkbox/TechsChekbox'
//
// const RepoSearch = () => {
//   const [search, setSearch] = useState<string[] | string>([])
//
//   const handleTechsChange = (selectedTechs: any) => {
//     setSearch(selectedTechs)
//   }
//
//   useEffect(() => {
//     const interval = setInterval(() => console.log(search), 1000)
//     return () => clearInterval(interval)
//   }, [search])
//
//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault()
//         console.log('submited')
//       }}
//       className='relative flex justify-between text-black'
//     >
//
//       <div className='w-full p-5 '>
//         <p className='mb-10 font-black uppercase '> Pesquisa por nome </p>
//
//         <div className='w-full'>
//           <TextField onChange={(e) => setSearch(e.target.value)} className='w-full bg-white' />
//         </div>
//       </div>
//
//       <div className='flex-col w-full h-full gap-2 p-5 file:flex'>
//         <p className='mb-8 font-black uppercase'>Pesquisa por tecnologia</p>
//
//         <TechsCheckbox selectedTechs={search} onSelectedTechsChange={handleTechsChange} />
//
//       </div>
//
//       <div className='relative flex flex-col w-full gap-1 p-5'>
//
//         <p className='mb-3 font-black uppercase'>Pesquisa por categoria</p>
//         <label>
//           <input className='mr-2' type='radio' name='stack' value='all' />
//           Todos
//         </label>
//         <label>
//           <input className='mr-2' type='radio' name='stack' value='full-stack' />
//           Full-Stack
//         </label>
//         <label>
//           <input className='mr-2' type='radio' name='stack' value='front-end' />
//           Front-End
//         </label>
//         <label>
//           <input className='mr-2' type='radio' name='stack' value='back-end' />
//           Back-End
//         </label>
//
//       </div>
//
//       <button type='submit' className='absolute btn-success btn right-5 bottom-5'>
//         Filtrar
//       </button>
//     </form>
//   )
// }
//
// export default RepoSearch
