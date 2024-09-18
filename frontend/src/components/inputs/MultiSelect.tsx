import { EuiComboBox } from '@elastic/eui';

export default function MultiSelect({
  options,
  value,
  onChange,
  ...props
}: any) {
  const selected = value
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
