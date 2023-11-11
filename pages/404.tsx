import Meta, { defaultMetaProps } from '@/components/layout/meta';
import { useRouter } from 'next/dist/client/router';
export { getStaticProps } from '.';

export default function Custom404() {
  const { query } = useRouter();
  console.log(2222, query);
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black">
      <Meta
        props={{
          ...defaultMetaProps,
          title: '404 | MongoDB Starter Kit',
          ogUrl: 'https://mongodb.vercel.app/404'
        }}
      />
      <h1 className="text-2xl font-light text-white">
        404 <span className="mx-3 text-4xl">|</span> User Not Found
      </h1>
    </div>
  );
}
