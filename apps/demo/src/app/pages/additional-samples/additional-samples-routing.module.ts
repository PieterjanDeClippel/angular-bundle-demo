import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', canActivate: [() => false] },
  { path: 'collapse', loadChildren: () => import('./collapse/collapse.module').then(m => m.CollapseModule) },
  { path: 'floating-labels', loadChildren: () => import('./floating-labels/floating-labels.module').then(m => m.FloatingLabelsModule) },
  { path: 'focus-trap', loadChildren: () => import('./focus-trap/focus-trap.module').then(m => m.FocusTrapModule) },
  { path: 'drag-drop', loadChildren: () => import('./drag-drop/drag-drop.module').then(m => m.DragDropModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdditionalSamplesRoutingModule { }
