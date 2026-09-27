export const navigation = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Como trabalho', href: '#processo' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export const services = [
  { number: '01', title: 'Landing pages', description: 'Uma página objetiva para apresentar sua oferta, destacar seus diferenciais e facilitar o contato.' },
  { number: '02', title: 'Sites institucionais', description: 'Uma presença digital organizada para mostrar quem você é, o que oferece e como o cliente pode falar com você.' },
  { number: '03', title: 'Cardápios e catálogos digitais', description: 'Produtos e serviços apresentados com clareza no celular, com acesso simples ao canal de atendimento.' },
  { number: '04', title: 'Conteúdo gerenciável, quando necessário', description: 'Avalio soluções com painel administrativo quando a atualização frequente justifica a implantação e a manutenção. Escopo definido por projeto.' },
]

export const projects = [
  {
    title: 'Desentupidora J.E.', kind: 'Projeto de cliente', image: '/images/desentupidora-je.webp',
    alt: 'Página inicial da Desentupidora J.E. com apresentação de serviços, ilustração de profissional e botões de contato por WhatsApp e telefone.',
    challenge: 'Criar uma presença digital profissional para um serviço local e tornar o contato fácil para quem busca atendimento.',
    work: 'Desenvolvimento da página responsiva, publicação em domínio próprio, SEO técnico e local e instrumentação de cliques de contato por GTM.',
    result: 'Site em produção com HTTPS, sitemap, dados estruturados e caminhos de contato.',
    links: [{ label: 'Ver site', href: 'https://desentupidoraje.com.br/' }],
  },
  {
    title: 'Cardápio Digital Essencial', kind: 'Demonstração própria', image: '/images/cardapio-essencial.webp',
    alt: 'Demonstração de cardápio digital de hamburgueria com destaque de produtos, links de categorias e botão de contato de exemplo.',
    challenge: 'Mostrar produtos de forma clara em uma experiência pensada para celular.',
    work: 'Demonstração de cardápio digital com links por categoria na navegação e contato genérico de exemplo.',
    result: 'Interface reutilizável e organização de conteúdo para pequenos estabelecimentos. O contato na demo é apenas ilustrativo.',
    links: [{ label: 'Ver demonstração', href: 'https://cardapioessencial.vercel.app/' }],
  },
  {
    title: 'Python Labs', kind: 'Laboratório próprio', image: '/images/python-labs.webp',
    alt: 'Página inicial do Python Labs em Streamlit com menu de fundamentos, algoritmos e projetos e apresentação da jornada em Python.',
    challenge: 'Reunir exercícios, experimentos e pequenos projetos em Python de modo navegável e verificável.',
    work: 'Aplicação multipágina em Streamlit, com fundamentos, algoritmos, projetos e exploração de arquivos.',
    result: 'Organização da aprendizagem, documentação pública e publicação de uma aplicação em evolução.',
    links: [{ label: 'Ver aplicação', href: 'https://python.manexlabs.dev/' }, { label: 'Ver código', href: 'https://github.com/AldomarAssolin/python-labs' }],
  },
]

export const steps = [
  { title: 'Entendo a necessidade', description: 'Objetivo do negócio, público, conteúdo disponível e ação desejada.' },
  { title: 'Defino a entrega', description: 'Páginas, funcionalidades, responsabilidades, revisões e prazo claros.' },
  { title: 'Desenvolvo e reviso', description: 'Interface responsiva, conteúdo, links e comportamento.' },
  { title: 'Publico e acompanho', description: 'Configuração do ambiente e orientações para atualização ou manutenção conforme o acordo.' },
]

export const about = {
  eyebrow: 'Sobre mim',
  title: 'Da indústria ao desenvolvimento web',
  description: 'Sou Aldomar Assolin, também conhecido como Manex. Minha trajetória começou na indústria metal-mecânica, trabalhando com produção, qualidade e melhoria contínua. Hoje aplico essa visão de processo ao desenvolvimento web: entender o problema, organizar a solução e entregar algo útil, claro e sustentável.',
  image: '/images/about-360-450.webp',
  image2x: '/images/about-569-320.webp',
  alt: 'Estação de trabalho com notebook e monitores exibindo um portfólio web e código.',
}
