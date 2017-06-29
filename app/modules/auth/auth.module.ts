import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import {TranslateModule} from "@ngx-translate/core";

import { TgCommonModule } from "../../ts/modules/common/common.module";
import { TgComponentsModule } from "../components/components.module";

import { ForgotPasswordForm } from "./forgot-password/forgot-password-form.component";
import { ForgotPasswordPage } from "./forgot-password/forgot-password.component";
import { LoginForm } from "./login/login-form.component";
import { LoginPage } from "./login/login.component";
import { RegisterForm } from "./register/register-form.component";
import { RegisterPage } from "./register/register.component";
import { ChangePasswordFromRecoveryForm } from "./change-password-from-recovery/change-password-from-recovery-form.component";
import { ChangePasswordFromRecoveryPage } from "./change-password-from-recovery/change-password-from-recovery.component";
import { PublicRegisterMessage} from "./login/public-register-message.component";

import {AuthEffects} from "./auth.effects";

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        TgCommonModule,
        TgComponentsModule,
        TranslateModule.forChild({}),
        RouterModule.forChild([
            {path: "change-password/:uuid", component: ChangePasswordFromRecoveryPage},
            {path: "register", component: RegisterPage},
            {path: "login", component: LoginPage},
            {path: "forgot-password", component: ForgotPasswordPage},
        ]),
        EffectsModule.run(AuthEffects),
    ],
    exports: [
        LoginPage,
        RegisterPage,
        ForgotPasswordPage,
        ChangePasswordFromRecoveryPage,
    ],
    declarations: [
        LoginPage,
        LoginForm,
        RegisterPage,
        RegisterForm,
        ForgotPasswordPage,
        ForgotPasswordForm,
        ChangePasswordFromRecoveryPage,
        ChangePasswordFromRecoveryForm,
        PublicRegisterMessage,
    ],
    providers: [
    ],
})
export class AuthModule {}
