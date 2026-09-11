import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <div>
          <strong>{siteConfig.name}</strong>
          <p>Estrutura Next.js pronta para crescer com segurança.</p>
        </div>
        <div className="footer-links">
          <Link href="/sobre">Sobre</Link>
          <Link href="/api/health">Saúde da aplicação</Link>
        </div>
      </Container>
    </footer>
  );
}
