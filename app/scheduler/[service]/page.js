import SchedulerForm from "@/components/SchedulerForm";
import React from "react";

export const metadata = {
    title: "Scheduler - Aerialink Inc",
    description: "Scheduler - Aerialink Inc",
};

export default function Scheduler({ params }) {
    return (
        <>
            <SchedulerForm params={params}/>
        </>
    );
}