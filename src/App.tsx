import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className="text-3xl">Welcome to your new app!</h1>
      <p className="text-xl pt-1">
        This boilerplate contains React Typescript, Vite, Tailwind CSS and
        DaisyUI
      </p>
      <button className="btn btn-primary mt-5">
        <Link to="/theme">Go to Theme Page</Link>
      </button>
    </div>
  );
}

export default App;
