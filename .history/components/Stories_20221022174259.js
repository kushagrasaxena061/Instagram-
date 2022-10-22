import React, { useEffect } from "react"
import Faker from "faker"

export default function Stories() {
  useEffect(() => {
    const suggestions = [...Array[20]].map((_, i) => ({
        ...Faker.helpers.contextualCard(),
        id:i
    }));
    console.log(suggestions)
  }, []);
  return <div></div>;
}
