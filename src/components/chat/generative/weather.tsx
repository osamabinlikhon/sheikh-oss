"use client";

import { Cloud, Sun, CloudRain, Wind, Droplets } from "lucide-react";

interface WeatherProps {
  city: string;
  country: string;
  temperature: number;
  unit: string;
  humidity: number;
  conditionCode: number;
  summary: string;
}

export function WeatherOutput({ city, country, temperature, unit, humidity, conditionCode, summary }: WeatherProps) {
  const getWeatherIcon = (code: number) => {
    if (code === 0) return <Sun className="w-8 h-8 text-yellow-500" />;
    if (code <= 3) return <Cloud className="w-8 h-8 text-blue-400" />;
    if (code >= 51) return <CloudRain className="w-8 h-8 text-blue-600" />;
    return <Cloud className="w-8 h-8 text-muted-foreground" />;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between bg-gradient-to-br from-primary/5 to-primary/10 p-4 rounded-xl border border-primary/10 shadow-sm">
        <div className="space-y-1">
          <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{city}, {country}</div>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black tracking-tighter">{temperature}</span>
            <span className="text-lg font-bold text-primary">{unit}</span>
          </div>
        </div>
        <div className="p-2 bg-background rounded-full shadow-inner ring-1 ring-border">
          {getWeatherIcon(conditionCode)}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-lg bg-muted/20 border flex items-center gap-3">
          <Droplets className="w-4 h-4 text-blue-500" />
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Humidity</span>
            <span className="text-sm font-bold">{humidity}%</span>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-muted/20 border flex items-center gap-3">
          <Wind className="w-4 h-4 text-primary" />
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Wind</span>
            <span className="text-sm font-bold">Safe</span>
          </div>
        </div>
      </div>

      <div className="text-sm leading-relaxed text-muted-foreground italic border-l-2 border-primary/20 pl-3">
        {summary}
      </div>
    </div>
  );
}
