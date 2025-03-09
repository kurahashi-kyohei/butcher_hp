// 一時的なモックデータ
const mockNews = [
  { id: '1', date: '2024-03-01', title: 'お知らせ1' },
  { id: '2', date: '2024-03-02', title: 'お知らせ2' },
  { id: '3', date: '2024-03-03', title: 'お知らせ3' },
];

export async function getNewsList() {
  try {
    // 本番環境でのAPI呼び出しをシミュレート
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockNews;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}