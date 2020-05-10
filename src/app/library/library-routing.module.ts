import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryComponent } from './library/library.component';

<<<<<<< Updated upstream
const routes: Routes = [
  {
    path: '',
    component: LibraryComponent,
  },
=======

const routes: Routes = [
  {
    path: '',
    component: LibraryComponent
  }
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryRoutingModule {}
