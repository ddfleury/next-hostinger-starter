import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FeatureCard } from "@/components/ui/feature-card";

const features = [
  {
    icon: "01",
    title: "App Router",
    description: "Rotas modernas, layouts compartilhados e componentes de servidor por padrão.",
  },
  {
    icon: "02",
    title: "TypeScript estrito",
    description: "Mais previsibilidade, manutenção segura e menos erros durante a evolução.",
  },
  {
    icon: "03",
    title: "Pronto para Hostinger",
    description: "Scripts de build e start compatíveis com a hospedagem gerenciada Node.js.",
  },
  {
    icon: "04",
    title: "Segurança inicial",
    description: "Cabeçalhos HTTP, variáveis protegidas e configuração sem exposição de tecnologia.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Container className="hero-grid">
          <div className="hero-content">
            <span className="eyebrow">NEXT.JS + HOSTINGER</span>
            <h1>Uma base sólida para sua próxima aplicação web.</h1>
            <p>
              Projeto modular, responsivo e preparado para receber autenticação, banco de dados,
              área administrativa e APIs.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/painel">
                Abrir painel
              </Link>
              <Link className="button secondary" href="/sobre">
                Conhecer a estrutura
              </Link>
            </div>
            <ul className="hero-checks" aria-label="Características principais">
              <li>Next.js 16</li>
              <li>Node.js 22</li>
              <li>Deploy pelo GitHub</li>
            </ul>
          </div>

          <div className="code-window" aria-label="Fluxo de publicação">
            <div className="window-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="code-content">
              <p><span className="code-muted">$</span> npm run check</p>
              <p><span className="code-success">✓</span> lint aprovado</p>
              <p><span className="code-success">✓</span> tipos aprovados</p>
              <p><span className="code-success">✓</span> build concluído</p>
              <div className="deploy-status">
                <span className="status-dot" />
                Pronto para publicar
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="section-heading">
            <span className="eyebrow">ARQUITETURA</span>
            <h2>Organizada para manutenção e crescimento</h2>
            <p>Separe interface, regras, configurações e integrações desde o início.</p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section section-muted">
        <Container className="next-step">
          <div>
            <span className="eyebrow">PRÓXIMO PASSO</span>
            <h2>Transforme esta base no seu sistema.</h2>
            <p>Adicione módulos reais mantendo a mesma organização de rotas e componentes.</p>
          </div>
          <Link className="button primary" href="/painel">
            Ver demonstração
          </Link>
        </Container>
      </section>
    </>
  );
}
