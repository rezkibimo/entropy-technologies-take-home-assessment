import QuoteWidget from "@/components/QuoteWidget.js";
import WeatherWidget from "@/components/WeatherWidget.js";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="max-w-[50rem] flex flex-col mx-auto size-full">
        <div className="flex">
          <WeatherWidget />
          <QuoteWidget />
        </div>
      </div>
    </main>
  );
}
