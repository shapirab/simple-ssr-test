import { Routes } from '@angular/router';
import { BloglistComponent } from './features/bloglist/bloglist.component';
import { BlogDetailsComponent } from './features/blog-details/blog-details.component';

export const routes: Routes = [
  { path: '', component: BloglistComponent },
  { path: 'blog-details/:id', component: BlogDetailsComponent }
];
