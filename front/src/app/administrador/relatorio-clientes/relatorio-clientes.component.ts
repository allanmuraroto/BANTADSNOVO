import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-relatorio-clientes',
  templateUrl: './relatorio-clientes.component.html',
  styleUrls: ['./relatorio-clientes.component.css']
})
export class RelatorioClientesComponent {

  clientes = [
    { cliente: 'João', CPF: 49123473345, limite: 70000, gerente: 'Gabriela', saldo: 90000 },
    { cliente: 'Ana', CPF: 43125445789, limite: 620000, gerente: 'Maria', saldo: 40000 },
    { cliente: 'Pedro', CPF: 59435566587, limite: 660000, gerente: 'João', saldo: 80000 }
  ];

  gerarPDF() {
    const doc = new jsPDF();
    doc.text('Relatório de Clientes', 10, 10);
    doc.text('Nome', 10, 20);
    doc.text('CPF',35, 20);
    doc.text('Limite', 90, 20);
    doc.text('NomeGerente', 120, 20);
    doc.text('Saldo', 160, 20);

    let linha = 30;
    this.clientes.forEach(cliente => {
      doc.text(cliente.cliente, 10, linha);
      doc.text(cliente.CPF.toString(), 35, linha);
      doc.text(cliente.limite.toString(), 90, linha);
      doc.text(cliente.gerente, 120, linha);
      doc.text(cliente.saldo.toString(), 160, linha);
      linha += 10;
    });

    doc.save('relatorio-clientes.pdf');
  }
}
