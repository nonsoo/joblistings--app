import React from "react";

const jobs = ({ indivJob }) => {
  const FiltersForJobs = [
    indivJob.level,
    indivJob.role,
    ...indivJob.languages,
    ...indivJob.tools,
  ];

  console.log(FiltersForJobs);
  return (
    <div className="jobListng">
      <div className="listingLeft">
        <img src={indivJob.logo} alt="" className="jobListing__Img" />
        <div className="jobListingText">
          <p className="jobListing__CompannyName">
            {indivJob.company}{" "}
            {indivJob.new && <span className="jobListing__Label">New</span>}
            {indivJob.featured && (
              <span className="jobListing__Label">Featured</span>
            )}
          </p>
          <p className="jobListing__Position">{indivJob.position}</p>
          <div className="jobListing__SubTextCon">
            <p className="jobListing__SubText">{indivJob.postedAt}</p>
            <p className="jobListing__SubText">{indivJob.contract}</p>
            <p className="jobListing__SubText">{indivJob.location}</p>
          </div>
        </div>
      </div>

      <div className="listingRight">
        {FiltersForJobs.map((filterdJob) => (
          <button key={Math.floor(Math.random() * 10000)} className="FilterJob">
            {filterdJob}
          </button>
        ))}
      </div>
    </div>
  );
};

export default jobs;
