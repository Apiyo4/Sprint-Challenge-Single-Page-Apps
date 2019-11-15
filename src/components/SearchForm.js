import React, { useState } from "react";

export default function SearchForm() {
 
  return (
    <section className="search-form">
     <form>
       <input type='text' placeholder="search"/>
       <button type='submit'>Search</button>
     </form>
    </section>
  );
}
