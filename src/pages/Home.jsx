import { useState } from "react";
import ReviewForm from "../components/ReviewForm";
import ReviewCard from "../components/ReviewCard";
import Header from "../components/Header";

function Home() {
  const [reviews, setReviews] = useState(
    JSON.parse(localStorage.getItem("reviews") || "[]"),
  );

  return (
    <>
      <Header title={"Home"} />
      <ReviewForm setReviews={setReviews} />
      <ReviewCard reviews={reviews} />
    </>
  );
}

export default Home;
