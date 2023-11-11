import AreaMenu from "@/components/AreaMenu";
import { getContent, getCrumbs, getMainMenu } from '@/lib/api/user';

export default function AreaInfoPage({ data }: { data: { themes: any[], articles: any[], isArticle: boolean; } }) {

    return (
        <AreaMenu content={data} />
    );
}


export const getServerSideProps = (async (context: any) => {
    const menu = await getMainMenu();
    const content = await getContent(context.params.area, context.params.path);
    const crumbs = await getCrumbs(context.params.area, context.params.path);

    return { props: { menu, data: content, crumbs } }
})

/*export const getStaticPaths = async () => {
    const menu = await getMainMenu();
    const childPaths = menu.reduce((result, val) => result.concat(val.childrens.map((child: any) => child.url)), [])
    const parentPaths = menu.filter(v => v.childrens.length === 0).map(v => v.url);

    return {
        paths: childPaths.concat(parentPaths).map((path: string) => {
            return {
                params: {
                    area: path,
                },
            };
        }),
        fallback: true,
    };
};

export async function getStaticProps({ params }: any) {
    const content = await getContent(params.area);
    const menu = await getMainMenu();

    return {
        props: {
            content,
            menu
        },
        revalidate: 10
    };
}*/