import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then(value => value.RecipesModule)
  },
  {
    path: 'shopping',
    loadChildren: () => import('./shopping/shopping.module').then(value => value.ShoppingModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(value => value.AuthModule)
  },
  { path: '**', redirectTo: '/recipes' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
