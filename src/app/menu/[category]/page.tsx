'use client';

import { NextPage } from 'next';
import { usePathname } from 'next/navigation'; 
import CategoryContainer from '../../components/menu/categoryContainer';
import Mv from '../../components/menu/mv';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function Search() {
  const searchParams = useSearchParams();

  return <input placeholder="Search..." />;
}

const Category: NextPage = () => {
  const path = usePathname();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Mv />
      <CategoryContainer path={path || ''} />
    </Suspense>
  )
}

export default Category;