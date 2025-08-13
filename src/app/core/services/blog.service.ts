import { Injectable, signal } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blog? = signal<Blog | null>(null);

  getAllBlogs(): Blog[]{
    return [
      { id: 1, name: 'first blog'},
      { id: 2, name: 'second blog'},
      { id: 3, name: 'third blog'},
      { id: 4, name: 'forth blog'},
    ];
  }

  getBlog(id: number){
    let blogs = this.getAllBlogs();
    let blog = blogs.find(item => item.id === id);
    if(blog){
      this.blog?.set(blog);
    }
  }
}
