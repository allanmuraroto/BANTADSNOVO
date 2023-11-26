import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { Gerente } from '../models/gerente.model'
import Inputmask from 'inputmask';

@Component({
  selector: 'app-criar-gerente',
  templateUrl: './criar-gerente.component.html',
  styleUrls: ['./criar-gerente.component.css']
})
export class CriarGerenteComponent implements OnInit {
  @ViewChild('formAdminGerente') formAdminGerente! : NgForm;
  gerente: Gerente = new Gerente()
  id!: string;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    Inputmask().mask(document.querySelectorAll('input'));
    this.id = this.route.snapshot.params['id']

    if(this.id){
      this.adminService.buscarGerentePorId(this.id)
      .subscribe((data: any) =>{
        this.gerente = data
      });
    }
  }

  salvar() {
    if (this.formAdminGerente.form.valid) {
      if (this.id)
        this.adminService.editarGerente(this.gerente).subscribe()
      else
        this.adminService.criarGerente(this.gerente).subscribe()

      this.router.navigate(['admin/gerentes'])
    }
  }

}
