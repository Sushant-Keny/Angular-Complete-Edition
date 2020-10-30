import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ShoppingComponent } from './shopping.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingRouterModule } from './shopping-router.module';
import { SharedModule } from '../_shared/shared.module';

@NgModule({
  declarations: [
    ShoppingComponent,
    ShoppingEditComponent,
    ShoppingListComponent
  ],
  imports: [
    FormsModule,
    ShoppingRouterModule,
    SharedModule
  ],
  exports: []
})
export class ShoppingModule {  }
