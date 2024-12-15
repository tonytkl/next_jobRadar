import JobForm from "./jobForm";
import Modal from "../reuseable/modal";
import Button from "../reuseable/button";
import { JobRecord } from "./../../models/jobModels";

type Props = {
  isOpen: boolean;
  setHide: () => void;
  job?: JobRecord;
};

const JobModal = ({ isOpen, setHide, job }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      setHide={setHide}
      title={job ? "Edit a record" : "Add new record"}
      // buttonText={['Cancel', 'Save']}
      // buttonAction={[setHide, () => {}]}
    >
      <JobForm job={job} />
      <div className="flex justify-end gap-2">
        <Button text="Cancel" onClick={setHide} color="primary" />
      </div>
    </Modal>
  );
};

export default JobModal;
