# Amor Animal

Site demonstrativo de uma ONG de proteção animal, com informações sobre a iniciativa, animais disponíveis para adoção, projetos e um formulário de interesse.

## Tecnologias
- HTML5 semântico
- CSS3 (layout responsivo, variáveis e temas)
- JavaScript (menu, modal, tema e validação no navegador)
- Vite 7

## Requisitos
- Node.js compatível com a versão do Vite instalada
- npm

## Instalação local
1. Clone o repositório:
   ```bash
   git clone URL_DO_REPOSITORIO
   ```
2. Entre na pasta do projeto:
   ```bash
   cd amor-animal
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Executar
```bash
npm run dev
```
Abra o endereço local mostrado no terminal.

## Build e pré-visualização
```bash
npm run build
npm run preview
```
Os ficheiros de produção são gerados na pasta `dist`.

## Estrutura
- `index.html`: página inicial
- `cadastro.html`: formulário demonstrativo
- `projeto.html`: apresentação dos projetos
- `css/style.css`: estilos, responsividade e temas
- `js/script.js`: interações
- `img/`: ilustrações SVG locais

## Acessibilidade e responsividade
O projeto utiliza landmarks semânticos, rótulos associados aos campos, texto alternativo nas imagens, estados ARIA em controlos, foco visível, suporte a teclado, opção de tema escuro e breakpoints para ecrãs menores. Estas medidas devem ser verificadas com testes manuais e ferramentas de auditoria; não representam, por si só, uma certificação WCAG.

## Formulário
O formulário valida os campos no navegador, mas **não envia nem armazena dados**. Para utilização real, é necessário integrar um backend ou um serviço de formulários, definir a política de privacidade e informar claramente o utilizador.

## Versionamento
O projeto pode adotar GitFlow (`main`, `develop` e branches `feature/*`) e mensagens Conventional Commits, por exemplo `feat: adicionar tema escuro`, `fix: corrigir navegação do modal` e `docs: atualizar README`. Registe apenas branches, commits, pull requests, issues, milestones e releases que tenham sido realmente criados no repositório. A versão indicada em `package.json` não prova que uma release/tag foi publicada.

## Publicação
Para alojamento estático, a build usa:
- Build command: `npm run build`
- Publish/output directory: `dist`

Importe o repositório no Netlify ou Vercel e configure estes valores. Após o deploy, teste todas as páginas, navegação, imagens e interações no URL publicado. A publicação ainda depende da configuração da conta e do repositório.

## Contactos e conteúdo
Os contactos e os animais são exemplos de demonstração. Substitua-os por informações autorizadas e reais antes de divulgar o site.
