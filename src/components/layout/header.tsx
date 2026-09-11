import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";

export function Header() {
  return (
    <header className="site-header">
      <Container className="header-inner">
        <Link className="brand" href="/" aria-label={`${siteConfig.name} - Início`}>
          <span className="brand-mark" aria-hidden="true">
            N
          </span>
          <span>{siteConfig.name}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Abrir menu">Menu</summary>
          <nav aria-label="Navegação para dispositivos móveis">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </Container>
    </header>
  );
}
