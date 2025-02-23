import { NewsItem, fetchAndCacheNews } from "@/services/api/newsFeed";
import { useEffect, useState } from "react";

export function useNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const loadNews = async () => {
    setLoading(true);
    const fetchedNews = await fetchAndCacheNews();
    setNews(fetchedNews);
    setLoading(false);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return {
    news,
    loading,
    refetch: () => loadNews(),
  };
}
