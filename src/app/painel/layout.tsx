import type { ReactNode } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function DashboardLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="dashboard-shell">
      <aside className="sidebar">
        <Link className="brand sidebar-brand" href="/">
          <span className="brand-mark" aria-hidden="true">N</span>
          <span>{siteConfig.name}</span>
        </Link>
        <nav aria-label="Menu do painel">
          <Link className="active" href="/painel">Visão geral</Link>
          <span className="disabled-link">Usuários</span>
          <span className="disabled-link">Relatórios</span>
          <span className="disabled-link">Configurações</span>
        </nav>
        <Link className="back-link" href="/">← Voltar ao site</Link>
      </aside>
      <div className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <span>Painel administrativo</span>
            <strong>Ambiente demonstrativo</strong>
          </div>
          <span className="avatar" aria-label="Usuário demonstrativo">EF</span>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
