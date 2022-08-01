import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AuthService, UserService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('Core already loaded');
    }
  }
  static forRoot() {
    return {
      ngModule: CoreModule
    }
  }

}
