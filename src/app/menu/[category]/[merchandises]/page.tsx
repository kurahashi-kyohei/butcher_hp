'use client';

import { NextPage } from 'next';
import { usePathname } from 'next/navigation'; 
import Mv from '@/app/components/menu/mv';
import MerchandisesContainer from '@/app/components/menu/merchandisesContainer';
import React from 'react'

const Merchandises: NextPage = () => {
  const path = usePathname();

  return (
    <div>
      <Mv />
      <MerchandisesContainer path={path || ''} />
    </div>
  )
}

export default Merchandises
