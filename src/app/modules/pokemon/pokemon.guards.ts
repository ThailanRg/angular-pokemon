import { inject } from '@angular/core';
import { CanDeactivateFn, Router, ActivatedRoute } from '@angular/router';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

export const requiredLogin = (activate: ActivatedRoute) => {
  if (localStorage.getItem('login')) {
    return true;
  } else {
    inject(Router).navigate(['/login']);
    return false;
  }
};

export const confirmUnsaved: CanDeactivateFn<PokemonDetailComponent> = (component) => {

  const x = confirm("voce tem certeza que deseja sair");

  if (x) {
    component.isSaved
    return true;
  } else {
    return false;
  }
};
