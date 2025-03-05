import categories from '@/app/data/category';
import CategoryContainer from '../../components/menu/categoryContainer';
import Mv from '../../components/menu/mv';

export default async function Category({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  return (
    <>
      <Mv />
      <CategoryContainer path={category} />
    </>
  )
}

// export async function generateStaticParams() {
//   return categories.map((category) => ({
//     category: category.href,
//   }));
// }