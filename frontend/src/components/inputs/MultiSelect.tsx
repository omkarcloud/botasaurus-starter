import { EuiComboBox } from '@elastic/eui'

export default function MultiSelect({
  options,
  value,
  onChange,
  ...props
}: any) {
  const selected = value
  // cleanedOptions.filter(x => value.includes(x.value))
  console.log({selected})
  debugger
  return (
    <EuiComboBox
      {...props}
      options={options}
      selectedOptions={selected}
      onChange={option => {
        onChange(option)
      }}
      isClearable={true}
    />
  )
}
