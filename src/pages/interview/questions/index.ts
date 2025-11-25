import { JS } from "./data/js";
import { React } from "./data/react";
import { CSS } from "./data/css";
import { TS } from "./data/ts";
import { API } from "./data/api";
import { Optimize } from "./data/optimize";

export const questionGroups = [
  {
    name: "Basic JS",
    questions: JS,
  },
  {
    name: "Basic TS",
    questions: TS,
  },
  {
    name: "Basic CSS",
    questions: CSS,
  },
  {
    name: "API & WebSocket",
    questions: API,
  },
  {
    name: "Web Performance Optimization",
    questions: Optimize,
  },
  {
    name: "React JS",
    questions: React,
  },
];
