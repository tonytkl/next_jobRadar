import { JobRecord, JobStatus } from "./../../models/jobModels";

type Props = {
  job?: JobRecord;
};

const JobForm = ({ job }: Props) => {
  return (
    <form>
      <div className="mb-2">
        <label className="text-sm text-gray-400">Company</label>
        <br />
        <input
          placeholder="Enter the company"
          type="text"
          className="w-full rounded-lg border p-1"
          defaultValue={job?.company}
          required
        />
      </div>
      <div className="mb-2">
        <label className="text-sm text-gray-400">Title</label>
        <br />
        <input
          placeholder="Enter job title"
          type="text"
          className="w-full rounded-lg border p-1"
          defaultValue={job?.title}
          required
        />
      </div>
      <div className="mb-2">
        <label className="text-sm text-gray-400">Job status</label>
        <br />
        <select
          className="w-full border p-1 rounded-lg"
          defaultValue={job?.status}
        >
          {Object.values(JobStatus).map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default JobForm;
