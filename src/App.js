import "./css/layout.css";
import "./css/comp.css";

import { useState } from "react";

import data from "./data.json";
import Jobs from "./Components/Jobs";

function App() {
  const [jobListingsState, setJobListingsState] = useState(data);

  console.log(jobListingsState);

  return (
    <div className="job-listing--site">
      <div className="banner"></div>
      <section className="listingContainer mainContent">
        {jobListingsState.map((job) => (
          <Jobs key={job.id} indivJob={job} />
        ))}
      </section>
    </div>
  );
}

export default App;
