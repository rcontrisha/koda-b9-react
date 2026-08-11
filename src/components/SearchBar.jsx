function SearchBar({ value, onChange }) {
  return (
    <form className="px-8 pt-4">
      <div>
        <input className="px-4 py-2 rounded-xl w-2/5 border-2 border-gray-500"
          type="text"
          name="search"
          id="search"
          value={value}
          onChange={onChange}
          placeholder="Cari Pokemon..."
        />
      </div>
    </form>
  )
}

export default SearchBar