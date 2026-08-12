/**
 * Component to show product's data as a table
 *
 * @typedef {Object} Product
 * @property {String} name
 * @property {Number} stock
 *
 * @param {Object} props
 * @param {Product[]} props.products
 * 
 * @returns {JSX.Element}
 */
function ProductTable({ products }) {
  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
          <tr>
            <th className="px-6 py-3 font-medium border-r">Product Name</th>
            <th className="px-6 py-3 font-medium">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => {
            return (
              <tr
                key={idx}
                className="bg-neutral-primary border-b border-default text-center"
              >
                <td className="px-6 py-4 border-r">{product.name}</td>
                <td className="px-6 py-4">{product.stock}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
