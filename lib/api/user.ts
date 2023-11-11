import clientPromise from '@/lib/mongodb';
import { remark } from 'remark';
import remarkMdx from 'remark-mdx';
import { serialize } from 'next-mdx-remote/serialize';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export const ARTICLE_PATH = 'article';

export interface UserProps {
  name: string;
  username: string;
  email: string;
  image: string;
  bio: string;
  bioMdx: MDXRemoteSerializeResult<Record<string, unknown>>;
  followers: number;
  verified: boolean;
}

export interface ResultProps {
  _id: string;
  users: UserProps[];
}

export async function getMdxSource(postContents: string) {
  // Use remark plugins to convert markdown into HTML string
  const processedContent = await remark()
    // Native remark plugin that parses markdown into MDX
    .use(remarkMdx)
    .process(postContents);

  // Convert converted html to string format
  const contentHtml = String(processedContent);

  // Serialize the content string into MDX
  const mdxSource = await serialize(contentHtml);

  return mdxSource;
}

export const placeholderBio = `
Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.

Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.`;

export async function getUser(username: string): Promise<UserProps | null> {
  const client = await clientPromise;
  const collection = client.db('test').collection('users');
  const results = await collection.findOne<UserProps>(
    { username },
    { projection: { _id: 0, emailVerified: 0 } }
  );
  if (results) {
    return {
      ...results,
      bioMdx: await getMdxSource(results.bio || placeholderBio)
    };
  } else {
    return null;
  }
}

export async function getFirstUser(): Promise<UserProps | null> {
  const client = await clientPromise;
  const collection = client.db('test').collection('users');
  const results = await collection.findOne<UserProps>(
    {},
    {
      projection: { _id: 0, emailVerified: 0 }
    }
  );
  if (results) {
    return {
      ...results,
      bioMdx: await getMdxSource(results.bio || placeholderBio)
    };
  } else {
    return null;
  }
}

export async function getCrumbs(area: string, path: string[] = []): Promise<any> {
  const client = await clientPromise;
  const menuCollection = client.db('apologetika').collection('mainmenuitems');
  const themesCollection = client.db('apologetika').collection('themes');
  const isArticle = (path.length > 1) && (path[path.length - 2] === ARTICLE_PATH);
  const themesPath = isArticle ? path.slice(0, -2) : path;
  const areaItem = await menuCollection.findOne({ url: area });
  if (!areaItem) {
    return [];
  }

  let url = `/${area}`;
  const resultThemes = [];
  for (let i = 0; i < themesPath.length; i++) {
    const theme = await themesCollection.findOne({ url: themesPath[i] });
    url = `${url}/${themesPath[i]}`;
    resultThemes.push({ title: theme?.text, url });
  }

  return [{ title: areaItem.text, url: `/${areaItem.url}` }, ...resultThemes];
}

export async function getContent(area: string, path: string[] = []): Promise<any> {
  const client = await clientPromise;
  const lastPath = path.length ? path[path.length - 1] : '';
  const isArticle = (path.length > 1) && (path[path.length - 2] === ARTICLE_PATH);
  const themesCollection = client.db('apologetika').collection('themes');
  const articlesCollection = client.db('apologetika').collection('articles');

  const parentTheme = isArticle ? null : await themesCollection.findOne({ url: lastPath });
  const parentId = parentTheme?._id.toString() || "";
  const resultThemes = isArticle ? [] : (await themesCollection.find({ area, parent: parentId, deleted: { $ne: true } })
    .toArray())
    .map(v => {
      const { _id, ...data } = v;
      return data
    });

  const resultArticles = (await articlesCollection.find(isArticle ? { url: lastPath } : { area, parent: parentId, deleted: { $ne: true } })
    .project(isArticle ? {} : { text: 0 })
    .toArray())
    .map(v => {
      const { _id, ...data } = v;
      return data
    });
  return {
    isArticle,
    themes: resultThemes,
    articles: resultArticles
  };
}

export async function getLimitArticles(limit: number): Promise<any> {
  const client = await clientPromise;
  const articlesCollection = client.db('apologetika').collection('articles');

  const resultArticles = (await articlesCollection.find({ deleted: { $ne: true } }).limit(limit)
    .project({ text: 0 })
    .toArray())
    .map(v => {
      const { _id, ...data } = v;
      return data
    });
  return {
    articles: resultArticles
  };
}

export async function getMainMenu(): Promise<any[]> {
  const client = await clientPromise;
  const collection = client.db('apologetika').collection('mainmenuitems');
  const result = (await collection.find().project({ text: 1, url: 1, parent: 1 }).toArray()).map(v => { const { _id, ...data } = v; return data });
  const menus = result.filter(v => !v.parent);
  const childs = result.filter(v => v.parent);

  return menus.map(v => ({ ...v, childrens: childs.filter(item => item.parent === v.url) }))
}

export async function getThemeUrls(): Promise<any[]> {
  const client = await clientPromise;
  const collection = client.db('apologetika').collection('themes');
  const result = (await collection.find({ deleted: { $ne: true } })
    .project({ url: 1 })
    .toArray())
    .map(v => {
      const { _id, ...data } = v;
      return data.url
    });

  return result;
}

export async function getArticleUrls(): Promise<any[]> {
  const client = await clientPromise;
  const collection = client.db('apologetika').collection('articles');
  const result = (await collection.find({ deleted: { $ne: true } })
    .project({ url: 1 })
    .toArray())
    .map(v => {
      const { _id, ...data } = v;
      return data.url
    });

  return result;
}
