import QuoteWidget from "@/components/QuoteWidget.js";
import WeatherWidget from "@/components/WeatherWidget.js";
import TodoList from "@/components/TodoList.js";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-10 lg:py-20 flex min-h-screen">
      <div className="flex mx-auto size-full gap-8 lg:flex-row flex-col-reverse">
      <TodoList />
        <div className="flex lg:flex-col lg:gap-8 flex-row">
          <WeatherWidget />
          <QuoteWidget />
        </div>
      </div>
    </main>
  );
}
