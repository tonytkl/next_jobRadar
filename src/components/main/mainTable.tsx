import { JobRecord } from "../../../models/jobModels";

type Props = {
  jobRecords: JobRecord[];
};

const MainTable = ({ jobRecords }: Props) => {
  return (
    <div className="max-w-full p-4">
      <div className="overflow-x-auto rounded border border-gray-300">
        <table className="w-full">
          <thead className="sticky top-0 z-10">
            <tr>
              <th
                scope="col"
                className="text-md sticky left-0 border-b border-gray-300 bg-gray-200 py-2 pl-2 pr-8 text-left uppercase tracking-wider text-gray-500 md:pr-2"
              >
                Company
              </th>
              <th
                scope="col"
                className="text-md border-b border-l border-r border-gray-300 bg-gray-200 py-2 pl-2 pr-8 text-left uppercase tracking-wider text-gray-500 md:pr-2"
              >
                Title
              </th>
              <th
                scope="col"
                className="text-md border-b border-l border-r border-gray-300 bg-gray-200 py-2 pl-2 pr-8 text-left uppercase tracking-wider text-gray-500 md:pr-2"
              >
                Status
              </th>
              <th
                scope="col"
                className="text-md border-b border-l border-r border-gray-300 bg-gray-200 py-2 pl-2 pr-8 text-left uppercase tracking-wider text-gray-500 md:pr-2"
              >
                Location
              </th>
              <th
                scope="col"
                className="text-md border-b border-gray-300 bg-gray-200 py-2 pl-2 pr-8 text-left uppercase tracking-wider text-gray-500 md:pr-2"
              >
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {jobRecords.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-4 text-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/9841/9841553.png"
                    alt="no job icon"
                    className="mx-auto my-2 w-32 text-center md:w-40"
                  />
                  <p className="mb-4">
                    Seems like you don't have any job records yet. Add a new
                    one!
                  </p>
                </td>
              </tr>
            ) : (
              jobRecords.map((jobRecord, i) => (
                <tr key={jobRecord.id}>
                  <td
                    className={`${
                      i === jobRecords.length - 1 ? "" : "border-b"
                    } sticky left-0 min-w-24 bg-white p-2 pr-8 text-sm md:pr-2`}
                  >
                    {jobRecord.company}
                  </td>
                  <td
                    className={`${
                      i === jobRecords.length - 1 ? "" : "border-b"
                    } p-2 pr-8 text-sm md:pr-2`}
                  >
                    {jobRecord.title}
                  </td>
                  <td
                    className={`${
                      i === jobRecords.length - 1 ? "" : "border-b"
                    } p-2 pr-8 text-sm md:pr-2`}
                  >
                    {jobRecord.status}
                  </td>
                  <td
                    className={`${
                      i === jobRecords.length - 1 ? "" : "border-b"
                    } whitespace-nowrap p-2 pr-8 text-sm md:pr-2`}
                  >
                    {jobRecord.location}
                  </td>
                  <td
                    className={`${
                      i === jobRecords.length - 1 ? "" : "border-b"
                    } p-2 pr-8 text-sm md:pr-2`}
                  >
                    {jobRecord.link ? (
                      <a
                        href={jobRecord.link}
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                      >
                        Link
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainTable;
