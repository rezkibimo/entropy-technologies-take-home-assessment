import Image from 'next/image'
import QuoteWidget from "@/components/QuoteWidget.js";
import WeatherWidget from "@/components/WeatherWidget.js";
import TodoList from "@/components/TodoList.js";
import Articles from "@/components/Articles.js";


export default function Home() {
  return (
    <main>
      {/* <Image className="h-auto max-w-full" width={500} height={500} src="//public/image.jpeg" alt="image description" /> */}
      <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-10 lg:py-20 min-h-screen">
        <div className="flex mx-auto size-full gap-8 lg:flex-row flex-col-reverse mb-8">
          <TodoList />
          <div className="flex lg:flex-col md:flex-row flex-col">
            <WeatherWidget />
            <QuoteWidget />
          </div>
        </div>
        <Articles />
      </div>
    </main>
  );
}
