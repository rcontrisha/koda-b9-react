/**
 * Component to handle input product's data
 * 
 * @typedef {Object} Product
 * @property {String} name
 * @property {Number} stock
 * 
 * @param {Object} props
 * @param {import("react").Dispatch<import("react").SetStateAction<Product[]>>} props.setProducts 
 * @returns {JSX.Element}
 */
function ProductForm({ setProducts }) {
  return (
    <div className="max-w-fit">
      <form
        className="w-full flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target.name.value);
          console.log(e.target.stock.value);

          setProducts((prevData) => {
            return [
              ...prevData,
              { name: e.target.name.value, stock: e.target.stock.value },
            ];
          });
        }}
      >
        <p className="">Input Data Product</p>
        <div className="py-2">
          <label htmlFor="name">Input Nama Product</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-2 ml-2 pl-2"
          />
        </div>
        <div>
          <label htmlFor="stock">Input Stock Product</label>
          <input
            type="number"
            name="stock"
            id="stock"
            className="border-2 ml-3 pl-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-700 px-4 py-2 text-white rounded-xl my-2 w-fit"
        >
          Add Data
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
