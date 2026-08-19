import { Link } from "react-router";

/**
 * Component to show each of Pokemon's Data as a card
 * @param {Object} props
 * @param {Object} props.data
 * @returns
 */
function PokeCard({ data }) {
  return (
    <article className="border border-gray-600 rounded-lg">
      <Link to={`/pokemon/${data.id}`} className="flex">
        <img src={data.sprite}></img>
        <div className="py-2">
          <p>{data.name}</p>
          <div className="flex gap-2">
            {data["types"]?.map((type, idx) => {
              return (
                <div key={idx} className="px-2 border-2 border-emerald-800 bg-emerald-400 rounded-full">
                  {type}
                </div>
              );
            })}
          </div>
        </div>
      </Link>
    </article>
  );
}

export default PokeCard;
