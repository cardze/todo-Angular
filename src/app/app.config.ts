import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core'


export const appConfig: ApplicationConfig = {
  providers: [provideAnimationsAsync(), provideNativeDateAdapter()]
};
