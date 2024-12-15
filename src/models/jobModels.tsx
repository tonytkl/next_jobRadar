export type JobRecord = {
    id: number
    title: string
    company: string
    status: JobStatus
    source?: string
    link?: string
    type?: JobType
    pay?: string
    appliedDate?: string
    location?: string
    jd?: string
    workModel?: WorkModel
}

export enum JobStatus {
    applied = 'Applied',
    interview = 'Interview',
    offer = 'Offer',
    rejected = 'Rejected',
}

enum WorkModel {
    remote = 'Remote',
    onsite = 'Onsite',
    hybrid = 'Hybrid',
}

enum JobType {
    fullTime = 'Full Time',
    partTime = 'Part Time',
    internship = 'Internship',
    contract = 'Contract',
    temporary = 'Temporary',
    freelance = 'Freelance',
}
