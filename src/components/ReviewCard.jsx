function ReviewCard({ reviews }) {
  if (reviews.length === 0) {
    return (
      <p className="px-8 py-4 text-center text-neutral-400">
        Belum ada review. Jadi yang pertama!
      </p>
    );
  }

  return (
    <div className="grid gap-4 px-8 py-4 sm:grid-cols-2 lg:grid-cols-3">
      {reviews.map(({ name, review }, i) => (
        <div
          key={i}
          className="rounded-xl border border-neutral-200 bg-white p-5"
        >
          <p className="font-semibold text-neutral-800">{name}</p>
          <p className="mt-1 text-sm text-neutral-500">{review}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewCard