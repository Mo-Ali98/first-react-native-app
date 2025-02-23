import AsyncStorage from "@react-native-async-storage/async-storage";
import { xml2js } from "xml-js";

const RSS_URL = "https://feeds.bbci.co.uk/news/england/rss.xml";
const STORAGE_KEY = "news";
const CACHE_EXPIRATION = 10 * 60 * 1000; // 10 minutes in milliseconds

export interface NewsItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
}

/**
 * Fetches and caches RSS news.
 */
export const fetchAndCacheNews = async (): Promise<NewsItem[]> => {
  try {
    // Check cache first
    const cachedData = await AsyncStorage.getItem(STORAGE_KEY);
    if (cachedData) {
      const { timestamp, news } = JSON.parse(cachedData);
      const now = Date.now();

      // Use cache if it's still valid
      if (now - timestamp < CACHE_EXPIRATION) {
        return news;
      }
    }

    // Fetch XML
    const response = await fetch(RSS_URL);
    const text = await response.text();

    // Convert XML to JSON
    const data = xml2js(text, { compact: true, ignoreAttributes: false }) as {
      rss: { channel: { item: any[] } };
    };

    const items = data.rss.channel.item.map((item: any) => ({
      title: item.title._cdata || item.title._text,
      description: item.description?._cdata || item.description?._text || "",
      link: item.link._text,
      pubDate: item.pubDate._text,
      thumbnail: item["media:thumbnail"]?._attributes?.url || "",
    }));

    // Cache news
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));

    return items;
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return [];
  }
};
