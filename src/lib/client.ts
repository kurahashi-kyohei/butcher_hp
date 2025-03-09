export async function getNewsList() {
  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      next: { revalidate: 60 }, // 60秒でキャッシュを再検証
    });

    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
} 