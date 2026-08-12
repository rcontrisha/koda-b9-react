function ReviewForm({ setReviews }) {
  return (
    <form
      className="w-full h-full px-8 py-4"
      onSubmit={(e) => {
        e.preventDefault()
        setReviews((prevData) => {
          localStorage.setItem(
            "reviews",
            JSON.stringify([
              ...prevData,
              { name: e.target.name.value, review: e.target.review.value },
            ]),
          );
          return [
            ...prevData,
            { name: e.target.name.value, review: e.target.review.value },
          ];
        });
      }}
    >
      <div className="flex flex-col w-2/5 mx-auto gap-2">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Input your name"
          className="px-2 py-1 border-2 rounded-lg"
        />
        <textarea
          className="px-2 py-1 border-2 rounded-lg"
          name="review"
          id="review"
          placeholder="Input your feedback here"
        />
        <button
          type="submit"
          className="px-2 py-1 mt-4 bg-blue-500 rounded-xl w-fit self-center text-white font-bold"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
