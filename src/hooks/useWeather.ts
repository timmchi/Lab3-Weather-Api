import { useState, useEffect } from "react";

interface WeatherData {
  city: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
}

interface WeatherHookResult {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
}

export const useWeather = (city: string): WeatherHookResult => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setLoading(true);
      try {
        const mockResponse: WeatherData = {
          city: city,
          temperature: Math.floor(Math.random() * 30),
          description: ["Sunny", "Cloudy", "Rainy"][
            Math.floor(Math.random() * 3)
          ],
          humidity: Math.floor(Math.random() * 100),
          windSpeed: Math.floor(Math.random() * 20),
        };

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setData(mockResponse);
      } catch (err) {
        setError("Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { data, loading, error };
};
