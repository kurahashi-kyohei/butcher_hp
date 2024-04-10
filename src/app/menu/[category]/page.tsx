'use client';

import { NextPage } from 'next';
import { usePathname } from 'next/navigation'; 
import CategoryContainer from '../../components/menu/categoryContainer';
import Mv from '../../components/menu/mv';
import { Suspense } from 'react';

const Category: NextPage = () => {
  const path = usePathname();

  return (
    <Suspense>
      <Mv />
      <CategoryContainer path={path || ''} />
    </Suspense>
  )
}

export default Category;