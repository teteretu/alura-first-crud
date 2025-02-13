import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  standalone: false,
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.sass'
})
export class CriarPensamentoComponent {
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo2'
  }

  criarPensamento() {
    alert("Novo pensamento criado!")
  }

  cancelar() {
    alert("Pensamento cancelado!")
  }
}
