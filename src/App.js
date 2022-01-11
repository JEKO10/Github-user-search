import SearchBar from "./components/SearchBar";

function App() {
  return (
    <main>
      <nav>
        <h1>devfinder</h1>
        <button>
          <span>Dark</span>
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z"
              fill="#697C9A"
              fill-rule="nonzero"
            />
          </svg>
        </button>
      </nav>
      <SearchBar />
    </main>
  );
}

export default App;
