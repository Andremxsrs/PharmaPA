import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Servicios

import { LoginService } from './services/login.service';
import { PeopleService } from './services/people.service';
import { ProductsCreateService } from './services/products-create.service';
import { TransactionsService } from './services/transactions.service';
import { UsersService } from './services/users.service';
import { WarehouseService } from './services/warehouse.service';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';

import { RegisterComponent } from './pages/register/register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login', 
    pathMatch: 'full'
  },
/*   {
    path: 'dashboard',
    component: DashboardComponent
  }, */
  {
    path: 'dashboard',
    component: SidebarComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    LoginService,
    PeopleService,
    ProductsCreateService,
    TransactionsService,
    UsersService,
    WarehouseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
