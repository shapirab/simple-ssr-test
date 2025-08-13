import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../core/models/blog';
import { BlogService } from '../../core/services/blog.service';

@Component({
  selector: 'app-blog-details',
  imports: [],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent implements OnInit{
  private activatedRoute = inject(ActivatedRoute);
  blogService = inject(BlogService);



  ngOnInit(): void {
      this.loadBlog();
  }

  loadBlog(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if(!id){
      return;
    }
    this.blogService.getBlog(+id);
  }
}
