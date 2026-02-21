import type { WorkflowStep } from "../types/landing.types";

type HowItWorksProps = {
  steps: WorkflowStep[];
};

export function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <section className="rounded-2xl border border-gray-100 bg-gray-50/50 p-8">
      <p className="mb-1 text-xs font-semibold tracking-wide text-gray-500 uppercase">
        Workflow
      </p>
      <h2 className="mb-2 text-3xl font-bold text-gray-900">How it works</h2>
      <p className="mb-8 text-gray-600">
        Simple for the hospital. Effortless for the patient.
      </p>
      <div className="grid gap-8 sm:grid-cols-3">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
              {step.stepNumber}
            </span>
            <h3 className="text-lg font-semibold text-gray-900">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
