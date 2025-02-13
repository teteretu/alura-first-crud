import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  standalone: false,
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.sass',
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'Conteúdo 1',
      autoria: 'Author 1',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Conteúdo 2 gingante com mais de 256 caracteres para conseguir deixar a div com a class pensamento-g. Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Aenean sit amet nisi. Aenean sit amet nisi. ',
      autoria: 'Author 2',
      modelo: 'modelo2',
    },
    {
      conteudo: 'Conteúdo 3',
      autoria: 'Author 3',
      modelo: 'modelo3',
    },
  ];
}
