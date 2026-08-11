function PokeCard({ data }) {
  return (
    <article className="flex border border-gray-600 rounded-lg">
      <img src={data.sprite}></img>
      <div className="py-2">
        <p>{data.name}</p>
        <div className="flex gap-2">
          {data["types"].map((type) => {
            return <div className="px-2 border-2 border-emerald-800 bg-emerald-400 rounded-full">{type}</div>;
          })}
        </div>
      </div>
    </article>
  );
}

export default PokeCard;
