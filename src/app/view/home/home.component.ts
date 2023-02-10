import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/public_api';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GithubService } from '../../services/github/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  user: string;
  sub: Subscription[] = [];
  messageError: boolean = false;
  constructor(
    private router: Router,
    private githubService: GithubService
  ) { }

  ngOnInit() {

  }
  verifyUser() {
    let value = this.user
    if(value){
      this.loading = true;
      value = this.user.trim()
      value = value.toLowerCase();
      this.sub.push(this.githubService.getUser(value).subscribe((resp: Object) => {
        this.loading = false
        this.navigateToPerfil()
      },
        (error) => {
          this.messageError = true
          this.loading = false
        }
      )
      )
    }else{
      this.messageError = true;
    }
  }
  receiveUser(user) {
    this.user = user;
    this.messageError = false;
  }
  navigateToPerfil() {
    this.router.navigate(['/perfil', this.user]);
  }
  ngOnDestroy(): void {
    this.sub.forEach(s => s.unsubscribe())
  }

}
