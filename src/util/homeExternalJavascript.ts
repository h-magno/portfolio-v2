const hoverRepoImage = (repoClass: string, repoIdx: number) => {
  const linkHeight: HTMLElement | null = document.getElementById(`link-${ repoClass }-repo-${ repoIdx }`)

  const myImg = document.getElementById(`img-${ repoClass }-repo-${ repoIdx }`) as HTMLElement
  const LinkHeight = window.getComputedStyle(linkHeight!, null).getPropertyValue('height')

  myImg.style.transitionDuration = '10s'
  myImg.style.transform = `translateY(calc(-100% + ${ LinkHeight }))`
}

const resetRepoImage = (repoClassification: string, repoIdx: number) => {
  const myImg = document.getElementById(`img-${ repoClassification }-repo-${ repoIdx }`) as HTMLElement

  myImg.style.transitionDuration = '0s'
  myImg.style.transform = 'translateY(-0%)'
}

const repoBackgroundImageUrl = (data: any, repoIdx: number) => {
  const httpIndexFinder = data[repoIdx].description.indexOf('http')
  const bgUrlValue = data[repoIdx].description.slice(httpIndexFinder)
  return bgUrlValue
}

const filteredRepos = (dataLastRepos: any, repoSearch: any, nameSearch:string, autocompleteSearch:string[], categorySearch:string) => {
  const searchParams = JSON.stringify(repoSearch?.repoSearchProps)
  const emptySearch = '{"nameSearch":"","autocompleteSearch":[],"categorySearch":"all"}'
  
  
  // ! FAÇA O ESTADO SER PASSADO SOMETE AO CLICAR EM FILTRAR

  if (searchParams !== emptySearch) {
    if (nameSearch?.length > 0) {
      const nameSearchFilter = dataLastRepos?.filter((repos) => repos.name.includes(nameSearch))

      return nameSearchFilter?.map((repo) => repo.name)
    }

    //* ///////////////////////

    if (autocompleteSearch?.length > 0) {
      const autocompleteValues = autocompleteSearch?.map((tech) => tech.tech)
      const refinedAutocompleteValues = autocompleteValues?.map((e) => e.toLowerCase())

      const autocompleteSearchFilter = dataLastRepos?.filter((repos) => repos.topics.some((topic) => refinedAutocompleteValues.includes(topic)))

      if (categorySearch !== 'all') {
        const autocompleteAndCategorySearch = autocompleteSearchFilter.filter((repos) => repos.topics.includes(categorySearch))
  
        return autocompleteAndCategorySearch?.map((repo) => repo.name)
      }
      
      return autocompleteSearchFilter?.map((repo) => repo.name)
    }

    //* ///////////////////////

    if (categorySearch !== 'all') {
      const categorySearchFilter = dataLastRepos?.filter((repos) => repos.topics.includes(categorySearch))
      // if (autocompleteSearch) {}
      // if (nameSearch) {}
      return categorySearchFilter?.map((repo) => repo.name)
    }

    //* ///////////////////////

    if (nameSearch?.length > 0 && autocompleteSearch.length > 0 && categorySearch !== 'all') {
      const nameSearchFilter = dataLastRepos?.filter((repos) => repos.name.includes(nameSearch))

      const autocompleteValues = autocompleteSearch?.map((tech) => tech.tech)
      const refinedAutocompleteValues = autocompleteValues?.map((e) => e.toLowerCase())

      const nameAndAutocompleteSearch = nameSearchFilter.filter((repos) => repos.topics.some((topic) => refinedAutocompleteValues.includes(topic)))

      const nameAndAutocompleteAndCategorySearch = nameAndAutocompleteSearch.filter((repos) => repos.topics.includes(categorySearch))

      return nameAndAutocompleteAndCategorySearch?.map((repo) => repo.name)
    }

    //* ///////////////////////

    if (nameSearch?.length > 0 && autocompleteSearch.length > 0) {
      const nameSearchFilter = dataLastRepos?.filter((repos) => repos.name.includes(nameSearch))

      const autocompleteValues = autocompleteSearch?.map((tech) => tech.tech)
      const refinedAutocompleteValues = autocompleteValues?.map((e) => e.toLowerCase())

      const nameAndAutocompleteSearch = nameSearchFilter.filter((repos) => repos.topics.some((topic) => refinedAutocompleteValues.includes(topic)))

      return nameAndAutocompleteSearch?.map((repo) => repo.name)
    }

    //* ///////////////////////

    if (nameSearch?.length > 0 && categorySearch !== 'all') {
      const nameSearchFilter = dataLastRepos?.filter((repos) => repos.name.includes(nameSearch))

      const nameAndCategorySearch = nameSearchFilter.filter((repos) => repos.topics.includes(categorySearch))
      return nameAndCategorySearch?.map((repo) => repo.name)
    }

    //* ///////////////////////
  }
}

export {
  hoverRepoImage,
  resetRepoImage,
  repoBackgroundImageUrl,
  filteredRepos,
}
