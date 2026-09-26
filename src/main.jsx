import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { navigation, projects, services, steps, about } from './content'
import './styles.css'

function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onEscape = (event) => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [])
  return <header className="site-header">
    <div className="container header-inner">
      <a className="brand" href="#inicio" onClick={() => setOpen(false)} aria-label="Aldomar Assolin — início">Aldomar<span>.</span>Assolin</a>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(value => !value)}>
        <span aria-hidden="true">{open ? '✕' : '☰'}</span><span>{open ? 'Fechar' : 'Menu'}</span>
      </button>
      <nav id="primary-nav" className={open ? 'nav nav-open' : 'nav'} aria-label="Navegação principal">
        {navigation.map(item => <a key={item.href} href={item.href} className={item.href === '#contato' ? 'nav-contact' : ''} onClick={() => setOpen(false)}>{item.label}</a>)}
      </nav>
    </div>
  </header>
}

function SectionTitle({ eyebrow, title, children }) {
  return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{children && <p>{children}</p>}</div>
}

function ProjectCard({ project }) {
  return <article className="project-card">
    <div className="project-image"><img src={project.image} alt={project.alt} loading="lazy" width="1200" height="681" /></div>
    <div className="project-body"><span className="badge">{project.kind}</span><h3>{project.title}</h3>
      <p><strong>Desafio:</strong> {project.challenge}</p><p><strong>Minha atuação:</strong> {project.work}</p><p><strong>O que demonstra:</strong> {project.result}</p>
      <div className="project-links">{project.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<span aria-hidden="true"> ↗</span><span className="sr-only"> (abre em nova aba)</span></a>)}</div>
    </div>
  </article>
}

function App() {
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <Header />
    <main id="conteudo">
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="container hero-inner"><span className="eyebrow">Aldomar Assolin | Desenvolvedor Web</span>
          <h1 id="hero-title">Sites e soluções web para pequenos negócios</h1>
          <p>Crio páginas profissionais e fáceis de usar que apresentam seu negócio, facilitam o contato com clientes e podem evoluir conforme a necessidade.</p>
          <div className="actions"><a className="button" href="#projetos">Ver projetos</a><a className="button button-outline" href="#contato">Entrar em contato</a></div>
        </div>
      </section>
      <section className="section" id="servicos"><div className="container">
        <SectionTitle eyebrow="Serviços" title="O essencial para colocar sua ideia na web">Entregas proporcionais ao objetivo do negócio e ao conteúdo disponível.</SectionTitle>
        <div className="services-grid">{services.map(service => <article className="service-card" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.description}</p></article>)}</div>
        <p className="service-extra"><strong>Complementos sob proposta:</strong> domínio, publicação, SEO básico, mensuração e manutenção.</p>
      </div></section>
      <section className="section projects-section" id="projetos"><div className="container">
        <SectionTitle eyebrow="Projetos" title="Trabalhos e experimentos verificáveis">Um projeto de cliente, uma demonstração e um laboratório próprio.</SectionTitle>
        <div className="projects-grid">{projects.map(project => <ProjectCard key={project.title} project={project} />)}</div>
      </div></section>
      <section className="section" id="processo"><div className="container"><SectionTitle eyebrow="Como trabalho" title="Um processo simples, com escopo claro" />
        <ol className="steps-grid">{steps.map((step, index) => <li key={step.title}><span className="step-number">{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
      </div></section>
      <section className="section about-section" id="sobre"><div className="container about-grid"><div className="about-image"><img src={about.image} srcSet={`${about.image} 1x, ${about.image2x} 2x`} alt={about.alt} loading="lazy"/></div><div><span className="eyebrow">{about.eyebrow}</span><h2>{about.title}</h2><p>{about.description}</p></div></div></section>
      <section className="section contact-section" id="contato"><div className="container"><div className="contact-box"><div><span className="eyebrow">Contato</span><h2>Tem um projeto em mente?</h2><p>Conte o que seu negócio precisa e vamos definir uma solução proporcional ao problema.</p></div><div className="actions"><a className="button" href="mailto:aldomartech@gmail.com">Enviar e-mail</a><a className="button button-outline" href="https://www.linkedin.com/in/aldomarassolin" target="_blank" rel="noopener noreferrer">LinkedIn<span className="sr-only"> (abre em nova aba)</span></a></div></div></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} Aldomar Assolin · Desenvolvedor Web</span><a href="#inicio">Voltar ao início ↑</a></div></footer>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
