import { CustomerGender, PersonType } from '../enums';
export const CustomerGenderList = [
  {
    label: 'male',
    value: CustomerGender.MALE,
  },
  {
    label: 'female',
    value: CustomerGender.FEMALE,
  },
] as const;

export const PersonTypeList = [
  {
    label: 'real',
    value: PersonType.RAEL,
  },
  {
    label: 'legal',
    value: PersonType.LEGAL,
  },
  {
    label: 'foreign',
    value: PersonType.FOREGIN,
  },
  {
    label: 'cbiCode',
    value: PersonType.CBICODE,
  },
];
