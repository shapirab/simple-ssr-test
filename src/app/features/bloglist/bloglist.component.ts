import { Component, inject, OnInit } from '@angular/core';
import { Blog } from '../../core/models/blog';
import { BlogService } from '../../core/services/blog.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bloglist',
  imports: [
    RouterLink
  ],
  templateUrl: './bloglist.component.html',
  styleUrl: './bloglist.component.css'
})
export class BloglistComponent implements OnInit{
  private blogService = inject(BlogService);

  blogs: Blog[] = [];

  ngOnInit(): void {
      this.loadBlogs();
  }

  loadBlogs(){
    this.blogs = this.blogService.getAllBlogs();
  }
}
