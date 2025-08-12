import JobApplyForm from "@/components/JobApplyForm";

export const metadata = {
  title: "Job Application Form - Aerialink Inc",
  description: "Job Application Form - Aerialink Inc",
};

export default function JobApply({ params }) {    
    return (
        <>
            <JobApplyForm params={params}/>
        </>
    );
}