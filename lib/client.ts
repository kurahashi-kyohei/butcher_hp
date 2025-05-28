import { createClient } from "microcms-js-sdk";

// クライアントの作成
const client = createClient({
  serviceDomain: 'butcher',
  apiKey: process.env.API_KEY || "jraY03Tsi421eCp9ffFsv9gHI55JnuOopZu7",
});

// お知らせ用の型を定義
export interface News {
  id: string;
  title: string;
  date: string;
  content: string;
}
export interface Calendar {
  id: string;
  date: string;
  close: boolean;
}

// お知らせ一覧を取得
export async function getNewsList(): Promise<News[]> {
  const data = await client.get({
    endpoint: "news",
    // customRequestInit: {
    //   cache: 'force-cache',
    //   next: {
    //     revalidate: 3600 
    //   }
    // }
  });
  return data.contents;
}
// お知らせ詳細を取得
export async function getNews(id: string): Promise<News> {
  const data = await client.get({
    endpoint: "news",
    contentId: id,
    
    // customRequestInit: {
    //   cache: 'force-cache',
    //   next: {
    //     revalidate: 3600 
    //   }
    // }
  });
  return data;
}

export async function getCalendarList(): Promise<Calendar[]> {
  const data = await client.get({ endpoint: "calendar" });
  return data.contents;
}