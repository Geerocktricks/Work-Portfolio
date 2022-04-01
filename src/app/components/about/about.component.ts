import { Component, OnInit } from '@angular/core';

import { MockBlog } from 'src/app/interfaces/mock-blog';

import { mockPosts } from '../../mockBlog/mock-blog';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  myBlogs: MockBlog[] = mockPosts;
  
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
