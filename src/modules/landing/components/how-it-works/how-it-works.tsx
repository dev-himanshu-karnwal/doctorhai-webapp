import type { WorkflowStep } from "../../types";
import { StepOneIcon } from "./step-one-icon";
import { StepTwoIcon } from "./step-two-icon";
import { StepThreeIcon } from "./step-three-icon";

type HowItWorksProps = {
  steps: WorkflowStep[];
};

export function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <section className="flex flex-col gap-8 rounded-[24px] border border-[#F1F5F9] bg-white p-6 text-center shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] sm:rounded-[32px] sm:p-8 md:gap-12 md:rounded-[40px] md:p-12 lg:gap-[64px] lg:p-[64px]">
      <div className="flex flex-col items-center justify-center gap-10 md:gap-14 lg:gap-[64px]">
        <div className="flex max-w-[768px] flex-col gap-2 sm:gap-[8px]">
          <p className="text-[12px] leading-[18px] font-bold tracking-[1px] text-[#4FB3AA] uppercase sm:text-[13px] sm:leading-[20px] md:text-[14px]">
            Workflow
          </p>
          <h2 className="text-[28px] leading-[34px] font-bold tracking-tight text-[#2D3748] sm:text-[32px] sm:leading-[38px] md:text-[36px] md:leading-[40px]">
            How it works
          </h2>
          <p className="pt-1 text-[15px] leading-[22px] font-medium text-[#718096] sm:pt-2 sm:text-[16px] sm:leading-[26px] md:pt-[7.5px] md:text-[18px] md:leading-[28px]">
            Simple for the hospital. Effortless for the patient.
          </p>
        </div>

        <div className="relative grid w-full grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 md:gap-12 lg:gap-[32px]">
          <div className="absolute top-[40px] right-[15%] left-[15%] hidden h-[2px] w-[70%] border-t-2 border-dashed border-[#E2E8F0] sm:block lg:top-[60px]" />
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="group relative flex flex-col items-center transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative z-10 flex h-[80px] w-full items-center justify-center pb-4 sm:h-[100px] sm:pb-[16px] lg:h-[120px] lg:pb-[24px]">
                {index === 0 && <StepOneIcon />}
                {index === 1 && <StepTwoIcon />}
                {index === 2 && <StepThreeIcon />}
              </div>

              <div className="flex max-w-[280px] flex-col items-center gap-1.5 sm:gap-2 lg:gap-[8px]">
                <h3 className="text-[17px] leading-[24px] font-bold text-[#2D3748] transition-colors duration-300 group-hover:text-[#4FB3AA] sm:text-[18px] sm:leading-[26px] lg:text-[20px] lg:leading-[28px]">
                  {step.stepNumber}. {step.title}
                </h3>
                <p className="text-[14px] leading-[20px] font-medium text-[#718096] sm:text-[15px] sm:leading-[22px] lg:text-[16px] lg:leading-[24px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
