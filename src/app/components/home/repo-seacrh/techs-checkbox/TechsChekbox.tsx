import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />
const checkedIcon = <CheckBoxIcon fontSize='small' />

const techStack = [
  { tech: 'React' },
  { tech: 'NextJS' },
  { tech: 'Javascript' },
  { tech: 'Typescript' },
  { tech: 'ExpressJS' },
  { tech: 'SQL' },
]

const TechsCheckbox = (props: any) => {
  const { onSelectedTechsChange } = props

  const handleTechsChange = (event: any, values: any) => {
    onSelectedTechsChange(values)
  }

  return (
    <div>
      <Autocomplete
        multiple
        id='checkboxes-tags-demo'
        options={techStack}
        disableCloseOnSelect
        getOptionLabel={(option) => option.tech}
        renderOption={(renderProps, option, { selected }) => (
          <li {...renderProps}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.tech}
          </li>
        )}
        className='w-full bg-white'
        renderInput={(params) => (
          <TextField {...params} />
        )}
        onChange={handleTechsChange}
      />
    </div>
  )
}

export default TechsCheckbox
