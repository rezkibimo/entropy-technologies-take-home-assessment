import QuoteWidget from "@/components/QuoteWidget.js";
import WeatherWidget from "@/components/WeatherWidget.js";
import TodoList from "@/components/TodoList.js";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-10 lg:py-20 flex min-h-screen">
      <div className="max-w-[50rem] flex flex-col mx-auto size-full">
        <div className="flex">
          <WeatherWidget />
          <QuoteWidget />
        </div>
        <TodoList />
      </div>
    </main>
  );
}
