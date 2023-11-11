import Home from "@/components/Home";

import {
  getMainMenu,
  getLimitArticles
} from '@/lib/api/user';
import { defaultMetaProps } from '@/components/layout/meta';

export default function HomePage({ data }: { data: { themes: any[], articles: any[], isArticle: boolean; } }) {
  return <Home content={data} />;
}

export const getServerSideProps = (async (context: any) => {
  const content = await getLimitArticles(18);
  const menu = await getMainMenu();

  return { props: { menu, data: content, crumbs: [], meta: defaultMetaProps, } }
})

