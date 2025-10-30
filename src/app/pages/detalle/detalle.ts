import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle.html',
  styleUrl: './detalle.scss'
})
export class DetalleComponent {
  id: string | null = null;
  imagenUrl: string = '';
  titulo: string = '';
  descripcion: string = '';
  autor: string = '';

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.queryParamMap.get('id');

    const datos: Record<string, {
      imagen: string;
      titulo: string;
      descripcion: string;
      autor: string;
    }> = {
      BatallaDell: {
        imagen: 'assets/img/BatallaDell.jpg',
        titulo: 'Batalla de arqueros',
        descripcion: 'Competencia por premios en una batalla de arqueros.',
        autor: 'Jefferson Gutierrez'
      },
      Samsung: {
        imagen: 'assets/img/Samsung.png',
        titulo: 'Navidad con Samsung',
        descripcion: 'Campaña navideña con productos Samsung.',
        autor: 'Jefferson Gutierrez'
      }
      // Puedes agregar más entradas aquí
    };

    if (this.id && datos[this.id]) {
      const info = datos[this.id];
      this.imagenUrl = info.imagen;
      this.titulo = info.titulo;
      this.descripcion = info.descripcion;
      this.autor = info.autor;
    }
  }
}

