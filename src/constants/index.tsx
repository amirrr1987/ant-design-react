import { presetPrimaryColors } from '@ant-design/colors'

export const primaryColorsList = Object.entries(presetPrimaryColors).reduce<
  { label: string; value: string }[]
>((acc, [label, value]) => {
  if (!acc.some(o => o.value === value)) acc.push({ label, value })
  return acc
}, [])
