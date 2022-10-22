import React, { useEffect } from "react"
import faker from "faker"

export default function Stories() {
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
        ...faker.helpers,
        id:i,
        name:i,
    }));
    console.log(suggestions)
  }, []);
  return <div></div>;
}
