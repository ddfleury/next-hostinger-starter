import Link from "next/link";

export default function NotFound() {
  return (
    <main className="centered-page">
      <span className="error-code">404</span>
      <h1>Página não encontrada</h1>
      <p>O endereço informado não existe ou foi alterado.</p>
      <Link className="button primary" href="/">Voltar ao início</Link>
    </main>
  );
}
