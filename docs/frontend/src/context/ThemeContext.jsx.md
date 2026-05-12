# ThemeContext.jsx

## Code (numbered)

```jsx
1 import { createContext, useContext, useState, useEffect } from "react";
2
3 const ThemeContext = createContext();
4
5 export function ThemeProvider({ children }) {
6   const [isDark, setIsDark] = useState(() => {
7     if (typeof window !== "undefined") {
8       const savedTheme = localStorage.getItem("theme");
9       if (savedTheme) {
10        return savedTheme === "dark";
11      }
12      return window.matchMedia("(prefers-color-scheme: dark)").matches;
13    }
14    return true; // Default to dark
15  });
16
17  useEffect(() => {
18    const root = window.document.documentElement;
19    if (isDark) {
20      root.classList.add("dark");
21      localStorage.setItem("theme", "dark");
22    } else {
23      root.classList.remove("dark");
24      localStorage.setItem("theme", "light");
25    }
26  }, [isDark]);
27
28  const toggleTheme = () => setIsDark(!isDark);
29
30  return (
31    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
32      {children}
33    </ThemeContext.Provider>
34  );
35 }
36
37 export function useTheme() {
38  return useContext(ThemeContext);
39 }
```

## Line-by-line explanation

- Line 1: Imports React context and state hooks for theme state.
- Line 2: Blank line for separation.
- Line 3: Creates a context to share theme state.
- Line 4: Blank line for separation.
- Line 5: Exports a provider component for the theme.
- Line 6: Initializes isDark from saved preference or OS setting.
- Line 7: Guards access to window in case of non-browser contexts.
- Line 8: Reads the saved theme from localStorage.
- Line 9: Checks if a saved theme exists.
- Line 10: Returns true if the saved theme is "dark".
- Line 11: Ends the saved-theme branch.
- Line 12: Falls back to OS preference if no saved theme.
- Line 13: Ends the window guard block.
- Line 14: Default fallback when window is unavailable.
- Line 15: Ends the useState initializer.
- Line 16: Blank line for separation.
- Line 17: Runs side effects when isDark changes.
- Line 18: Targets the root html element.
- Line 19: Checks if dark mode is active.
- Line 20: Adds the "dark" class for Tailwind dark styles.
- Line 21: Persists "dark" preference.
- Line 22: Else branch for light mode.
- Line 23: Removes the "dark" class.
- Line 24: Persists "light" preference.
- Line 25: Ends the if/else block.
- Line 26: Ends the effect and sets dependency on isDark.
- Line 27: Blank line for separation.
- Line 28: Defines a helper to toggle the theme state.
- Line 29: Blank line for separation.
- Line 30: Starts the provider render.
- Line 31: Supplies theme state and toggle action to children.
- Line 32: Renders children inside the provider.
- Line 33: Closes the provider.
- Line 34: Ends the provider render.
- Line 35: Ends ThemeProvider.
- Line 36: Blank line for separation.
- Line 37: Exports a hook to read the theme context.
- Line 38: Returns the current context value.
- Line 39: Ends useTheme.
