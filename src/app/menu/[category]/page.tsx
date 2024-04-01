'use client';

import { NextPage } from 'next';
import { usePathname } from 'next/navigation'; 
import CategoryContainer from '@/app/components/menu/categoryContainer';
import Mv from '@/app/components/menu/mv';

const Category: NextPage = () => {
  const path = usePathname();

  return (
    <div>
      <Mv />
      <CategoryContainer path={path || ''} />
    </div>
  )
}

export default Category;