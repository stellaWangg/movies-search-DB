import React from "react";

import { useGlobalContext } from "./context";
export const Nav = () => {
  const { query, setQuery } = useGlobalContext();

  return (
    <nav>
      <div class="nav-container">
        <a href="/" className="nav-header">
          Movies 🔍
        </a>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="blur"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
        </form>
      </div>
    </nav>
  );
};
