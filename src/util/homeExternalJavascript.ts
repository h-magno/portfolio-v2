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

const repoBackgroundImageUrl = (data: any) => {
  if (data.description === undefined) {
    return ''
  }

  const httpIndexFinder = data.description.indexOf('http')
  const bgUrlValue = data.description.slice(httpIndexFinder)
  return bgUrlValue
}

const filteredRepos = (
  dataLastRepos: any,
  nameSearch: string,
  autocompleteSearch: string[],
  categorySearch: string,
) => {
  type Repo = {
    name: string
    topics: string[]
    tech: any
  }

  // ! FAÇA O ESTADO SER PASSADO SOMETE AO CLICAR EM FILTRAR

  //* /////////////////////// Name Search + Autocomplete Search + Category Search

  if (nameSearch?.length > 0 && autocompleteSearch.length > 0 && categorySearch !== 'all') {
    const nameSearchFilter = dataLastRepos?.filter((repo: Repo) => repo.name.includes(nameSearch))
    const autocompleteValues = autocompleteSearch?.map((tech) => (tech.tech).toLowerCase())
    const nameAndAutocompleteSearch = nameSearchFilter.filter(
      (repo: Repo) => repo.topics.some((topic) => autocompleteValues.includes(topic)),
    )

    return nameAndAutocompleteSearch.filter((repo: Repo) => repo.topics.includes(categorySearch))
  }

  //* /////////////////////// Name Search + Autocomplete Search

  if (nameSearch?.length > 0 && autocompleteSearch.length > 0) {
    const nameSearchFilter = dataLastRepos?.filter((repo: Repo) => repo.name.includes(nameSearch))
    const autocompleteValues = autocompleteSearch?.map((tech: Repo) => (tech.tech).toLowerCase())

    return nameSearchFilter.filter((repo: Repo) => repo.topics.some((topic) => autocompleteValues.includes(topic)))
  }

  //* /////////////////////// Name Search + Category Search

  if (nameSearch?.length > 0 && categorySearch !== 'all') {
    const nameSearchFilter = dataLastRepos?.filter((repo: Repo) => repo.name.includes(nameSearch))

    return nameSearchFilter.filter((repo: Repo) => repo.topics.includes(categorySearch))
  }

  //* /////////////////////// Autocomplete Search + Category Search

  if (autocompleteSearch?.length > 0 && categorySearch !== 'all') {
    const autocompleteValues = autocompleteSearch?.map((tech) => (tech.tech).toLowerCase())
    const autocompleteSearchFilter = dataLastRepos?.filter(
      (repo: Repo) => repo.topics.some((topic) => autocompleteValues.includes(topic)),
    )

    return autocompleteSearchFilter.filter((repo: Repo) => repo.topics.includes(categorySearch))
  }
  //* /////////////////////// Name Search

  if (nameSearch?.length > 0) {
    return dataLastRepos?.filter((repo: Repo) => repo.name.includes(nameSearch))
  }

  //* /////////////////////// Autocomplete Search

  if (autocompleteSearch?.length > 0) {
    const autocompleteValues = autocompleteSearch?.map((tech) => tech.tech)
    const refinedAutocompleteValues = autocompleteValues?.map((e) => e.toLowerCase())

    return dataLastRepos?.filter((repo: Repo) => repo.topics.some((topic) => refinedAutocompleteValues.includes(topic)))
  }

  //* /////////////////////// Category Search

  if (categorySearch !== 'all') {
    return dataLastRepos?.filter((repo: Repo) => repo.topics.includes(categorySearch))
  }

  return 'searchedResults'
}

export {
  hoverRepoImage, resetRepoImage, repoBackgroundImageUrl, filteredRepos,
}
