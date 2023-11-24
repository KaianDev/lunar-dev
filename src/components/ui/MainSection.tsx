"use client";
import { ChevronDown, MouseIcon } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const MainSection = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <main className="container relative mx-auto flex min-h-[calc(100vh-88px)] flex-1 items-center justify-center p-4">
      <div className="grid grid-cols-1 justify-around gap-4 pb-4 pt-16 md:grid-cols-2 md:py-0">
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="300"
          data-aos-easing="linear"
          className="max-h-90 flex max-w-lg flex-col gap-4 bg-luna-dark p-4 text-center text-white md:mt-0"
        >
          <h2 className="text-2xl font-bold">
            Agência de <br /> Desenvolvimento Web
          </h2>
          <p className="mx-auto flex flex-1 items-center md:w-4/5">
            Pronto para transformar sua visão em realidade? Entre em contato
            agora e leve seu projeto para o próximo nível.
          </p>
          <button className="animate-pulse rounded  bg-luna-link py-2 text-xl font-semibold ease-in hover:animate-none hover:bg-luna-link/50">
            Faça seu orçamento
          </button>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="300"
          data-aos-easing="linear"
          className="max-h-90 flex max-w-lg flex-col gap-4 bg-luna-dark p-4 text-center text-white md:flex-1"
        >
          <h2 className="text-2xl font-bold">Últimos Serviço</h2>
          <Image
            src="/assets/workout.png"
            alt="Último serviço"
            width={0}
            height={0}
            sizes="100vw"
            className="mx-auto h-full w-full"
          />
          <button className="rounded  bg-luna-link py-2 text-xl font-semibold duration-200 ease-in hover:bg-luna-link/50">
            Visitar
          </button>
        </div>
      </div>
      <div className="absolute bottom-4 flex animate-bounce flex-col opacity-70">
        <MouseIcon size={35} className="-mb-2 text-white" />
        <ChevronDown size={35} className="text-luna-pink" />
      </div>
    </main>
  );
};

export default MainSection;
