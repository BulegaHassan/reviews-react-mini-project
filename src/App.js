import React from "react";
import Review from "./Review";
function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <Review/>
          <div className='underline'></div>
        </div>
      </section>
    </main>
  );
}

export default App;
