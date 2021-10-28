import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(null);

  function onClick() {
    fetch("/api/count", { method: "POST"})
      .then((response) => response.text())
      .then(setCount);
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://icon-library.com/images/hand-click-icon-png/hand-click-icon-png-13.jpg"></img>
        <div className="text-center lg:w-2/3 w-full">
          {count && <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">You clicked {count} times!</h1>}
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg" onClick={onClick}>Click Me!</button>
          </div>
        </div>
      </div>
    </section>
  )
}