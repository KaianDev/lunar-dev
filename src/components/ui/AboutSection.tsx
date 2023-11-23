import Image from "next/image";
import Title from "./Title";

const AboutSection = () => {
  return (
    <section id="about" className="bg-luna-blue-dark pb-10">
      <div className="container mx-auto px-4">
        <Title label="Sobre nós" />
        <div className="flex flex-col gap-8 md:flex-row-reverse">
          <Image
            src="/assets/logo.png"
            alt="Logo LunaDev"
            sizes="100vw"
            width={0}
            height={0}
            className="mx-auto h-64 w-auto"
          />
          <div className="whitespace flex flex-col gap-1 rounded bg-luna-dark p-4 text-sm text-white">
            <p>
              Bem-vindo à LunarDev, sua passagem para a inovação digital e o
              aprimoramento tecnológico. Somos mais do que uma simples agência
              de desenvolvimento web; somos impulsionados pela paixão por
              transformar ideias em realidade. Desde a nossa concepção, na busca
              incessante pela excelência digital, estamos comprometidos em
              oferecer soluções personalizadas e criativas para cada desafio.{" "}
            </p>
            <p>
              Na LunarDev, acreditamos que a tecnologia é a ferramenta que
              impulsiona o futuro. Estamos dedicados a moldar essa visão,
              ajudando nossos clientes a alcançar seus objetivos digitais e
              superar as expectativas do mercado. Nossa equipe altamente
              qualificada e apaixonada não apenas cria sites, mas constrói
              experiências digitais que cativam e inspiram. Trabalhamos lado a
              lado com nossos clientes, entendendo suas necessidades e
              vislumbrando soluções que impulsionam o crescimento dos seus
              negócios. Desde o desenvolvimento de websites responsivos até
              aplicativos personalizados e estratégias de marketing digital,
              cada projeto na LunarDev é tratado com atenção meticulosa aos
              detalhes, garantindo resultados excepcionais.
            </p>
            <p>
              Na nossa jornada rumo à excelência, abraçamos a inovação e nos
              mantemos atualizados com as tendências mais recentes do mundo
              digital. Estamos prontos para ser o seu parceiro confiável na
              busca por um futuro digital mais brilhante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
