import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch("jobs.json")
      .then(res => res.json())
      .then(data => setJobs(data))
  }, [])

  // console.log(jobs)
  return (
    <div className="text-center">
      <div>
        <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div>
          {
            jobs.map((job, index) => <Job key={index} job={job}></Job>)
          }
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;