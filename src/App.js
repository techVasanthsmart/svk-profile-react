function App() {
  return (
    <div classNameName="container mx-auto px-4">
      <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-32 overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover object-center h-32"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Woman looking front"
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="font-semibold">Vasanth Kumar S</h2>
          <p className="text-gray-500">Full Stack Developer</p>
        </div>
        <div className="text-center mt-2">
          <p className="text-gray-500">
            A full stack developer is a programmer or engineer who can work on
            both the front end and back end of a website. The front end is what
            users see and interact with, while the back end is the data storage
            and processing that happens behind the scenes.
          </p>
        </div>

        <div className="p-4 border-t mx-8 mt-2">
          <span class="ml-4 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            React
          </span>
          <span class="ml-4 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
            Node
          </span>
          <span class="ml-4 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
            MySQL
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
