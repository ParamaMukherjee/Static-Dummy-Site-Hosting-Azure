import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dummy-site';
  message: string = '';
  constructor(private apiService: ApiService){}

  ngOnInit(): void{
    this.apiService.getHello().subscribe({
      next: (res)=>{
        this.message = res.message
      },
      error:(error)=>{
        console.error("Api called failed")
      }
    })
  }
}
