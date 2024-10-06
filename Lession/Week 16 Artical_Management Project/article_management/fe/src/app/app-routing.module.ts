import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component';
import { PaidArticleComponent } from './paid-article/paid-article.component';

const routes: Routes = [
  {
    path:"",
    redirectTo: "article",
    pathMatch:"full" // no need prefix or subfix, it emtpey will redirection article
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'article',
    component: ArticleComponent
  },
  {
    path: 'paid_article',
    component: PaidArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
