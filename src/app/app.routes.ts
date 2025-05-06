import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddProjectCardComponent } from './card/add-project-card/add-project-card.component';
import { ProductListSKUsComponent } from './product-list-skus/product-list-skus.component';
import { UsersComponent } from './users/users.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { CategoryComponent } from './category/category.component';
import { PlanogramComponent } from './planogram/planogram.component';
import { AddUserComponent } from './card/add-user/add-user.component';
import { AddSKUComponent } from './card/add-sku/add-sku.component';
import { CreateCategoryComponent } from './card/create-category/create-category.component';
import { CreatePlanogramComponent } from './card/create-planogram/create-planogram.component';
import { CreateComplianceComponent } from './card/create-compliance/create-compliance.component';
// import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'changePassword', component: ChangePasswordComponent },
      { path: 'addProject', component: AddProjectCardComponent },
      { path: 'skus', component: ProductListSKUsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'compliance', component: ComplianceComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'planogram', component: PlanogramComponent },
      { path: 'addUser', component: AddUserComponent },
      { path: 'addSKU', component: AddSKUComponent },
      { path: 'createCategory', component: CreateCategoryComponent },
      { path: 'createPlanogram', component: CreatePlanogramComponent },
      { path: 'createCompliance', component: CreateComplianceComponent },
    ],
  },

  { path: '', component: RegisterComponent },
];
