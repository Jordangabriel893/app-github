import { GithubService } from './../../services/github/github.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit, OnDestroy {
  userName;
  userInfo;
  repositorios = [];
  sub: Subscription[] = [];
  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
    
    ) { }

  ngOnInit() {
    this.userName = this.route.snapshot.params['user'];
    this.getInfoUser();
    this.getUserRepositorios()
  }
   getInfoUser(){
    this.sub.push(this.githubService.getUser(this.userName).subscribe( resp => {
      this.userInfo = resp
    })
  )
  }
  getUserRepositorios(){
    this.sub.push(this.githubService.getRepositorios(this.userName).subscribe( resp => {
      this.repositorios = resp
      this.ordenarRepositorios();
      this.calcularDias()
    })
  )
  }
  calcularDias(){
    this.repositorios.map(item => {
      if(item.updated_at){
        const now = moment();
        item.updated_at = now.diff(moment(item.updated_at), 'days');
      }
      return item
    })
  }
  ordenarRepositorios(){
    this.repositorios.sort(function (a, b) {
      if (a.stargazers_count < b.stargazers_count) {
        return 1;
      }
      if (a.stargazers_count > b.stargazers_count) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  ngOnDestroy(): void {
    this.sub.forEach(s => s.unsubscribe())
  }
}
