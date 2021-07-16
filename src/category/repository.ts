import { Category } from './category';

const categories: Category[] = [
  {
    id: 1,
    name: 'ACTION1',

  },
  {
    id: 2,
    name: 'ACTION2',
  },
  {
    id: 3,
    name: 'ANIMALS1',
  },
  {
    id: 4,
    name: 'ANIMALS2',
  },
  {
    id: 5,
    name: 'CLOTH',
  },
  {
    id: 6,
    name: 'EMOTIONS',
  },
  {
    id: 7,
    name: 'SPORT',
  },
  {
    id: 8,
    name: 'WEATHER',
  },
];

export function getCategories(): Promise<Category[]> {
  return Promise.resolve<Category[]>(categories);
}

export function getCategoryById(categoryId: number): Promise<Category | undefined> {
  return Promise.resolve(categories.find((cat) => cat.id === categoryId));
}

export function createCategory(category: Category): Promise<Category> {
  const isExist = typeof categories
    .find((cat) => cat.name.toLowerCase() === category.name.toLowerCase()) !== 'undefined';
  if (isExist) {
    return Promise.reject(new Error(`Category with name ${category.name} is already exists`));
  }

  const id = categories.length + 1;
  const model = { ...category, id };
  categories.push(model);

  return Promise.resolve(model);
}

export function deleteCategory(id: number): Promise<void> {
  const index = categories.findIndex((cat) => cat.id === id);
  if (index < 0) {
    Promise.reject(new Error('Category not found'));
  }
  categories.splice(index, 1);
  return Promise.resolve();
}
