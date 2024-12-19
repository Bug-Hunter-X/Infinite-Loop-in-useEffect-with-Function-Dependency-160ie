# React Native useEffect Infinite Loop Bug

This repository demonstrates a common error in React Native applications involving the `useEffect` hook and its dependency array.  When a function is included in the dependency array without memoization, the effect runs repeatedly, leading to an infinite loop and performance issues.

## Problem

The provided `bug.js` file shows a `useEffect` hook with a function (`myFunction`) as a dependency.  Because the function's reference changes on every render, the effect is triggered continuously.

## Solution

The `bugSolution.js` file presents a corrected version using `useCallback` to memoize the function. This ensures that the function's reference remains the same unless its dependencies change, preventing the infinite loop.

## How to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npx react-native run-android` or `npx react-native run-ios` (depending on your platform).
4. Observe the console log in the bug.js version. You'll see 'Effect running!' being printed continuously.
5. Switch to the solution to see how useCallback resolves the issue.