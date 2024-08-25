import { describe, it, expect } from "vitest";
import { splitTodosIntoDays } from "./list.js";

describe("splitTodosIntoDays", () => {
  it("should correctly group todos by day", () => {
    const todos = [
      { day: "mo", task: "Task 1" },
      { day: "ti", task: "Task 2" },
      { day: "on", task: "Task 3" },
      { day: "mo", task: "Task 4" },
      { day: "lö", task: "Task 5" },
    ];
    const expected = [
      [
        { day: "mo", task: "Task 1" },
        { day: "mo", task: "Task 4" },
      ],
      [{ day: "ti", task: "Task 2" }],
      [{ day: "on", task: "Task 3" }],
      [],
      [],
      [{ day: "lö", task: "Task 5" }],
      [],
    ];
    expect(splitTodosIntoDays(todos)).toEqual(expected);
  });

  it("should return an array of empty arrays when given an empty list", () => {
    const todos = [];
    const expected = [[], [], [], [], [], [], []];
    expect(splitTodosIntoDays(todos)).toEqual(expected);
  });

  it("should handle todos with days not in the list", () => {
    const todos = [
      { day: "mo", task: "Task 1" },
      { day: "unknown", task: "Task 6" },
    ];
    const expected = [[{ day: "mo", task: "Task 1" }], [], [], [], [], [], []];
    expect(splitTodosIntoDays(todos)).toEqual(expected);
  });

  it("should handle todos on all days of the week", () => {
    const todos = [
      { day: "mo", task: "Task 1" },
      { day: "ti", task: "Task 2" },
      { day: "on", task: "Task 3" },
      { day: "to", task: "Task 4" },
      { day: "fr", task: "Task 5" },
      { day: "lö", task: "Task 6" },
      { day: "sö", task: "Task 7" },
    ];
    const expected = [
      [{ day: "mo", task: "Task 1" }],
      [{ day: "ti", task: "Task 2" }],
      [{ day: "on", task: "Task 3" }],
      [{ day: "to", task: "Task 4" }],
      [{ day: "fr", task: "Task 5" }],
      [{ day: "lö", task: "Task 6" }],
      [{ day: "sö", task: "Task 7" }],
    ];
    expect(splitTodosIntoDays(todos)).toEqual(expected);
  });
});
