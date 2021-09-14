import MovieList from "./MovieList";
function App(){
    return (
       <main className="bg-primary min-h-screen pt-12">
           <h1 className="text-3xl text-center text-white mb-8">Movie List</h1>
           <MovieList />
       </main>
    )
}

export default App;