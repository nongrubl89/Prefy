import React from "react";
import { useParams } from "react-router-dom";

export default function Topictest() {
  let { topicId } = { useParams };
  return <div>{topicId}</div>;
}
