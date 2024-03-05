function Hero() {
    const hour = new Date().getHours();
    let greetingMessage;

    if (hour >= 5 && hour < 12) {
        greetingMessage = 'Good morning';
    } else if (hour >= 12 && hour < 18) {
        greetingMessage = 'Good afternoon';
    } else {
        greetingMessage = 'Good evening';
    }

    return <header>
        <div className="w-full bg-center bg-[url('../public/image.jpeg')] bg-cover">
            <div className="flex items-center w-full h-full bg-gray-900 bg-opacity-50">
                <div className="container mx-auto text-left px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-10 lg:py-20">
                    <div className="container px-4">
                        <div className="max-w-4xl text-left">
                            <h2 className="mt-8 text-4xl lg:text-5xl font-bold text-gray-100">{greetingMessage} and</h2>
                            <h2 className="mb-6 text-4xl lg:text-5xl font-bold text-gray-100">welcome back</h2>
                            {/* <p className="max-w-3xl text-lg text-gray-300">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum sit cum iure qui, nostrum at sapiente
                ducimus.
              </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>;
}

export default Hero;