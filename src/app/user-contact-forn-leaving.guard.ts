import { CanDeactivateFn } from '@angular/router';

export const userContactFornLeavingGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return confirm("Are you sure to leave from this page?");
};
