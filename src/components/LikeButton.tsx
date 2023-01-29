import React, { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  if (liked) {
    return "You liked this!";
  }

  return <button onClick={() => setLiked(true)}>Like</button>;
}
