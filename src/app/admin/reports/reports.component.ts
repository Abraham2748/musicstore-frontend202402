import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
})
export class ReportsComponent {
  public pieChartLabels = [
    ['Download Sales'],
    ['In-Store Sales'],
    ['Mail-Order Sales'],
  ];
  public pieChartDatasets = [
    {
      data: [300, 500, 100],
    },
  ];
  public pieChartLegend = true;

  createPdf() {
    const content: TDocumentDefinitions = {
      content: [
        {
          text: 'Reporte de ventas',
          style: 'header',
        },
        {
          text: 'Ventas por categoría',
          style: 'subheader',
        },
        {
          style: 'tableExample',
          table: {
            body: [
              ['Categoría', 'Ventas'],
              ['Download Sales', 300],
              ['In-Store Sales', 500],
              ['Mail-Order Sales', 100],
            ],
          },
        },
        {
          text: 'Ventas por producto',
          style: 'subheader',
        },
        {
          style: 'tableExample',
          table: {
            body: [
              ['Producto', 'Ventas'],
              ['Product 1', 300],
              ['Product 2', 500],
              ['Product 3', 100],
            ],
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5],
        },
        tableExample: {
          margin: [0, 5, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black',
        },
      },
    };

    pdfMake.createPdf(content).open();
  }
}
