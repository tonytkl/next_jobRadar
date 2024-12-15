"use client";

import { useBool } from "../hooks/useBool";
import MainTable from "../components/main/mainTable";
import Button from "../components/reuseable/button";
import { JobRecord, JobStatus } from "../models/jobModels";
import JobModal from "../components/main/jobModal";

const HomePage = () => {
  let jobRecords: JobRecord[] = [];
  const modalState = useBool(false);

  // Data fetching process
  // const getJobRecords = () => {}

  // Dummy data
  jobRecords = [
    {
      id: 1,
      title: "Software Engineer asd asd asd asdasd as sad sad",
      company: "Google asdsa asd as asd sa sa sadsadas",
      status: JobStatus.applied,
      location: "Mountain View, CA",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Facebook",
      status: JobStatus.interview,
      location: "Menlo Park, CA",
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Amazon",
      status: JobStatus.offer,
      location: "Seattle, WA",
    },
    {
      id: 4,
      title: "Software Engineer",
      company: "Microsoft",
      status: JobStatus.rejected,
      location: "Redmond, WA",
    },

    {
      id: 5,
      title: "Software Engineer",
      company: "Google",
      status: JobStatus.applied,
      location: "Mountain View, CA",
    },
    {
      id: 6,
      title: "Product Manager",
      company: "Facebook",
      status: JobStatus.interview,
      location: "Menlo Park, CA",
    },
    {
      id: 7,
      title: "Data Analyst",
      company: "Amazon",
      status: JobStatus.offer,
      location: "Seattle, WA",
    },
    {
      id: 8,
      title: "Software Engineer",
      company: "Microsoft",
      status: JobStatus.rejected,
      location: "Redmond, WA",
    },

    {
      id: 9,
      title: "Software Engineer",
      company: "Google",
      status: JobStatus.applied,
      location: "Mountain View, CA",
    },
    {
      id: 10,
      title: "Product Manager",
      company: "Facebook",
      status: JobStatus.interview,
      location: "Menlo Park, CA",
    },
    {
      id: 11,
      title: "Data Analyst",
      company: "Amazon",
      status: JobStatus.offer,
      location: "Seattle, WA",
    },
    {
      id: 12,
      title: "Software Engineer",
      company: "Microsoft",
      status: JobStatus.rejected,
      location: "Redmond, WA",
    },

    {
      id: 13,
      title: "Software Engineer",
      company: "Google",
      status: JobStatus.applied,
      location: "Mountain View, CA",
    },
    {
      id: 14,
      title: "Product Manager",
      company: "Facebook",
      status: JobStatus.interview,
      location: "Menlo Park, CA",
    },
    {
      id: 15,
      title: "Data Analyst",
      company: "Amazon",
      status: JobStatus.offer,
      location: "Seattle, WA",
    },
    {
      id: 16,
      title: "Software Engineer",
      company: "Microsoft",
      status: JobStatus.rejected,
      location: "Redmond, WA",
    },
  ];

  return (
    <div className="md:px-6 lg:px-20">
      <div className="mr-6 flex justify-end">
        <Button
          text="Add record"
          onClick={() => {
            modalState.set(true);
          }}
          color="primary"
        />
      </div>

      <MainTable jobRecords={jobRecords} />

      {modalState.val && (
        <JobModal
          isOpen={modalState.val}
          setHide={() => modalState.set(false)}
          // job={jobRecords[2]}
        />
      )}
    </div>
  );
};

export default HomePage;
