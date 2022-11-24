import { HTMLAttributes } from 'react';
import { StepIndicatorContainer, StyledStepIndicator, StepWay } from './styles';

interface IStepIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  steps: number[];
}

export function StepIndicator({ steps, ...props }: IStepIndicatorProps) {
  return (
    <StepIndicatorContainer {...props}>
      {steps.map((step, index) => (
        <>
          <StyledStepIndicator key={step}>{step}</StyledStepIndicator>

          {steps.indexOf(step) < steps.length - 1 && (
            <>
              <StepWay key={Math.random()} />
              <StepWay key={Math.random()} />
              <StepWay key={Math.random()} />
            </>
          )}
        </>
      ))}
    </StepIndicatorContainer>
  );
}
