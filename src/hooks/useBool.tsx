"use client";
import { useState } from "react";

/**
 * helper hook for typical boolean state logic
 *
 * @param init initial boolean value
 * @returns a boolean object with helper functions
 */
export function useBool(init: boolean) {
  const [val, set] = useState(init);

  const toggle = () => set(!val);

  const setTrue = () => set(true);
  const setFalse = () => set(false);

  return { val, set, toggle, setTrue, setFalse };
}
