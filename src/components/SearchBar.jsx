/**
 * Component that contains a text field, acting as a search bar for searching pokemon data (by pokemon's name)
 * @param {Object} props
 * @param {String} props.value
 * @param {import("react").Dispatch<import("react").SetStateAction<String>>} props.onChange 
 * @returns 
 */
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