import AreaMenu from "@/components/AreaMenu";
import { getContent, getCrumbs, getMainMenu } from '@/lib/api/user';

export default function AreaInfoPage({ data }: { data: { themes: any[], articles: any[], isArticle: boolean; } }) {
    return (
        <AreaMenu content={data} />
    );
}


export const getServerSideProps = (async (context: any) => {
    const content = await getContent(context.params.area);
    const menu = await getMainMenu();
    const crumbs = await getCrumbs(context.params.area, context.params.path);

    return { props: { menu, data: content, crumbs } }
})