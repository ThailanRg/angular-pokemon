import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found.component';

registerLocaleData(ptBr);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pokemon',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./modules/pokemon/pokemon.module').then((m) => m.PokemonModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [AppComponent, LoginComponent,  NotFoundComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
