import { NextPage } from 'next';
import { usePathname } from 'next/navigation'; 
import CategoryContainer from '../../components/menu/categoryContainer';
import Mv from '../../components/menu/mv';
import categories from '@/app/data/category';

export async function generateStaticParams(): Promise<any[]> {
  return categories.map((category) => ({
    category: category.title.toString(),
  }))
}

const Category: NextPage = () => {
  const path = usePathname();

  return (
    <>
      <Mv />
      <CategoryContainer path={path || ''} />
    </>
  )
}

export default Category;