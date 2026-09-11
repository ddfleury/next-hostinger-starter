import type { Metadata } from "next";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a arquitetura do projeto Next.js preparado para a Hostinger.",
};

const folders = [
  ["src/app", "Páginas, layouts, APIs e arquivos especiais do App Router."],
  ["src/components", "Componentes visuais reutilizáveis e independentes das páginas."],
  ["src/config", "Configurações centrais, navegação e identidade da aplicação."],
  ["src/lib", "Serviços, validações, integrações e utilitários compartilhados."],
  ["public", "Imagens, ícones e demais arquivos estáticos públicos."],
];

export default function AboutPage() {
  return (
    <section className="section page-section">
      <Container>
        <div className="section-heading narrow">
          <span className="eyebrow">ESTRUTURA DO PROJETO</span>
          <h1>Separação clara de responsabilidades</h1>
          <p>
            A estrutura inicial permite adicionar autenticação, banco de dados e novos módulos sem
            concentrar toda a aplicação em poucos arquivos.
          </p>
        </div>

        <div className="folder-list">
          {folders.map(([folder, description]) => (
            <article key={folder}>
              <code>{folder}</code>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
