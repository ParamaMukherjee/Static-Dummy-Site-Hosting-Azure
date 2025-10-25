import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

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
  private apiUrl = 'https://my-backend-api-hpa4hugcdcg0ekf9.eastasia-01.azurewebsites.net/api/hello';

  constructor(private http: HttpClient){}

  ngOnInit(): void{
    this.http.get<any>(this.apiUrl).subscribe((res)=>{
      this.message = res.message
      console.log(res)
    })
    // this.apiService.getHello().subscribe({
    //   next: (res)=>{
    //     this.message = res.message
    //   },
    //   error:(error)=>{
    //     console.error("Api called failed")
    //   }
    // })
  }
}
