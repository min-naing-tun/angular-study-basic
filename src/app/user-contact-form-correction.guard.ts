import { CanActivateFn } from '@angular/router';

export const userContactFormCorrectionGuard: CanActivateFn = (route, state) => {
  return confirm("Are you sure to enter user contact form?");
};
