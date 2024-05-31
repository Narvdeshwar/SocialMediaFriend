import React, { useState } from "react";
import Card from "./components/Card";

export default function App() {
  const items = [
    {
      name: "Romia",
      profession: "photographer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
      isFriend: false,
    },
    {
      name: "Julia",
      profession: "programmer",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
      isFriend: false,
    },
    {
      name: "Sinc",
      profession: "Philosopher",
      image:
        "https://images.unsplash.com/photo-1532123675048-773bd75df1b4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc4fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3Dz",
      isFriend: false,
    },
    {
      name: "Rinc",
      profession: "UI/UX",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
      isFriend: false,
    },
    {
      name: "Sophie",
      profession: "Artish",
      image:
        "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBvcnRyYWl0fGVufDB8fDB8fHww",
      isFriend: false,
    },
    {
      name: "John",
      profession: "Nothing",
      image:
        "https://plus.unsplash.com/premium_photo-1673734625879-2dd5410bc3e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fHBvcnRyYWl0fGVufDB8fDB8fHww",
      isFriend: false,
    },
  ];
  const [data, setData] = useState(items);
  const HandleClick = (itemIndex) => {
    setData((previous) =>
      previous.map((item, index) =>
        itemIndex === index ? { ...item, isFriend: !item.isFriend } : item
      )
    );
  };
  return (
    <div className="flex items-center justify-center w-full h-screen gap-5 bg-zinc-400">
      {data.map((item, index) => (
        <Card
          key={index}
          value={item}
          index={index}
          handleFriend={HandleClick}
        />
      ))}
    </div>
  );
}
