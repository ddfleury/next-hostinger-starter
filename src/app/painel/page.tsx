import type { Metadata } from "next";
import { StatCard } from "@/components/ui/stat-card";

export const metadata: Metadata = {
  title: "Painel",
  description: "Painel demonstrativo da aplicação.",
};

const recentItems = [
  { name: "Estrutura inicial criada", type: "Sistema", status: "Concluído" },
  { name: "Cabeçalhos de segurança", type: "Segurança", status: "Concluído" },
  { name: "Integração com banco", type: "Próximo módulo", status: "Pendente" },
  { name: "Autenticação de usuários", type: "Próximo módulo", status: "Pendente" },
];

export default function DashboardPage() {
  return (
    <div className="dashboard-content">
      <div className="dashboard-title">
        <div>
          <span className="eyebrow">VISÃO GERAL</span>
          <h1>Bem-vindo à sua aplicação</h1>
          <p>Utilize este painel como ponto de partida para os módulos administrativos.</p>
        </div>
        <span className="environment-badge">Produção preparada</span>
      </div>

      <section className="stats-grid" aria-label="Indicadores demonstrativos">
        <StatCard label="Módulos" value="04" variation="2 preparados" tone="positive" />
        <StatCard label="Rotas públicas" value="03" variation="Ativas" tone="positive" />
        <StatCard label="API" value="01" variation="Health check" />
        <StatCard label="Build" value="100%" variation="Validado" tone="positive" />
      </section>

      <section className="panel-card">
        <div className="panel-card-header">
          <div>
            <h2>Etapas da aplicação</h2>
            <p>Exemplo de tabela responsiva para seus dados.</p>
          </div>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Atividade</th>
                <th>Categoria</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentItems.map((item) => (
                <tr key={item.name}>
                  <td><strong>{item.name}</strong></td>
                  <td>{item.type}</td>
                  <td>
                    <span className={`table-status ${item.status === "Concluído" ? "done" : "pending"}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
