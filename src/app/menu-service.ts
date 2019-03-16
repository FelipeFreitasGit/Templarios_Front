import { NavItem } from "./shared/navItem.model";

export class MenuService {

  private itens: NavItem[] = []

  public exibirOptionMenu(): NavItem[] {
    return this.itens = [
      {
        displayName: 'Eventos',
        iconName: 'event',
        route: '',
        children: []
      },
      {
        displayName: 'Cadastro',
        iconName: 'group',
        route: '',
        children: [
          {
            displayName: 'Membro',
            iconName: 'person',
            route: '',
            children: []
          },
          {
            displayName: 'Relacionados',
            iconName: 'person',
            route: '',
            children: []
          },
          {
            displayName: 'Consulta',
            iconName: 'find_in_page',
            route: '',
            children: [
              {
                displayName: 'Usuario',
                iconName: 'person',
                route: 'usuario',
                children: []
              },
              {
                displayName: 'Aniversário',
                iconName: 'person',
                route: '',
                children: []
              },
            ]
          },
        ]
      },
      {
        displayName: 'Trabalhos',
        iconName: 'work',
        route: '',
        children: [
          {
            displayName: 'Mestre',
            iconName: 'person',
            route: '',
            children: []
          },
          {
            displayName: 'Companheiro',
            iconName: 'person',
            route: '',
            children: []
          },
          {
            displayName: 'Aprendiz',
            iconName: 'person',
            route: '',
            children: []
          },
          {
            displayName: 'Acácias',
            iconName: 'person',
            route: '',
            children: []
          },
        ]
      },
      {
        displayName: 'Cadeia de comunicação',
        iconName: 'toc',
        route: '',
        children: []
      },
      {
        displayName: 'Formulários',
        iconName: 'chrome_reader_mode',
        route: '',
        children: []
      },
      {
        displayName: 'Livro de presença',
        iconName: 'book',
        route: '',
        children: []
      },
      {
        displayName: 'Boletins',
        iconName: 'assignment',
        route: '',
        children: []
      },
      {
        displayName: 'Upload de arquivos',
        iconName: 'cloud_upload',
        route: '',
        children: []
      },
    ]
  }

}
