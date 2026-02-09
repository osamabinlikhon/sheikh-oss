"use client";

import { Cloud, Sun, CloudRain, CloudSnow, CloudFog, CloudLightning, Droplets } from "lucide-react";

export interface WeatherData {
  city: string;
  temperature: number;
  weatherCode: number;
  humidity: number;
}

function getWeatherIcon(weatherCode: number) {
  if (weatherCode === 0) return <Sun className="w-10 h-10" />;
  if (weatherCode === 1 || weatherCode === 2) return <Cloud className="w-10 h-10" />;
  if (weatherCode === 3) return <CloudFog className="w-10 h-10" />;
  if (weatherCode >= 51 && weatherCode <= 67) return <CloudRain className="w-10 h-10" />;
  if (weatherCode >= 71 && weatherCode <= 77) return <CloudSnow className="w-10 h-10" />;
  if (weatherCode >= 80 && weatherCode <= 99) return <CloudLightning className="w-10 h-10" />;
  return <Sun className="w-10 h-10" />;
}

function getWeatherCondition(weatherCode: number): string {
  if (weatherCode === 0) return 'আকাশ পরিষ্কার (Clear sky)';
  if (weatherCode === 1) return 'প্রধানত পরিষ্কার (Mainly clear)';
  if (weatherCode === 2) return 'আংশিক মেঘলা (Partly cloudy)';
  if (weatherCode === 3) return 'মেঘলা (Overcast)';
  if (weatherCode >= 51 && weatherCode <= 67) return 'বৃষ্টি (Rainy)';
  return 'অজানা আবহাওয়া (Unknown)';
}

export function WeatherOutput({ weatherData }: { weatherData: WeatherData }) {
  return (
    <div className="text-white p-5 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 shadow-xl max-w-sm animate-in zoom-in-95 duration-500 overflow-hidden relative group">
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-700" />

      <div className="relative">
          <div className="text-[10px] font-bold uppercase tracking-widest text-blue-100/70 mb-1">আবহাওয়া রিপোর্ট (Weather)</div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            {weatherData.city}
          </h2>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-4xl font-black tracking-tighter">{weatherData.temperature}°C</p>
              <p className="text-sm font-medium text-blue-50/90">
                {getWeatherCondition(weatherData.weatherCode)}
              </p>
            </div>
            <div className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
              {getWeatherIcon(weatherData.weatherCode)}
            </div>
          </div>
          <div className="mt-5 pt-3 border-t border-white/20 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-blue-50/80">
            <div className="flex items-center gap-1.5">
                <Droplets className="w-3 h-3" />
                <span>আর্দ্রতা (Humidity): {weatherData.humidity}%</span>
            </div>
            <span>Verified Data</span>
          </div>
      </div>
    </div>
  );
}
