import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data: any;
   
  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getProfiler();
  }

  getProfiler() {
    this.auth.getProfile().subscribe(res => {
      if(res.success){
        this.data = res.data;
      } else {
        this.logout();                                                                                                                                                            
      }
    }, err => {

    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
