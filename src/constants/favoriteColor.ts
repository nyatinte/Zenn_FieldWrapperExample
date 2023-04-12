import { SelectOptions } from '@/components/Form';

export const favoriteColor = ['red', 'green', 'blue'] as const;
export type FavoriteColor = typeof favoriteColor[number];

export const favoriteColorSelectOptions: SelectOptions<FavoriteColor> = [
  { value: 'red', label: '赤' },
  { value: 'green', label: '緑' },
  { value: 'blue', label: '青' },
];
