"use client";
import { Code2Icon, MonitorIcon, SmartphoneIcon } from "lucide-react";
import Title from "./Title";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ServiceSection = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <section id="services" className="bg-luna-blue-dark ">
      <div className="container mx-auto px-4 py-10">
        <Title label="Nossos Serviços" />
        <div className="grid gap-4 lg:grid-cols-3">
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="linear"
            className="flex flex-col gap-4 bg-luna-dark p-8"
          >
            <div className="flex flex-row items-center gap-2 lg:flex-col">
              <Code2Icon size={40} className="text-luna-pink" />
              <h3 className="text-xl text-white">Desenvolvimento de Sites</h3>
            </div>
            <p className="leading-tight text-luna-gray lg:text-center">
              O site e o comércio eletrônico não precisam ser caros ou
              complicados para serem eficazes. Nós lidamos com um amplo espectro
              de clientes com diferentes orçamentos e necessidades.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-easing="linear"
            className="flex flex-col gap-4 bg-luna-dark p-8"
          >
            <div className="flex flex-row items-center gap-2 lg:flex-col">
              <SmartphoneIcon size={40} className="text-luna-pink" />
              <h3 className="text-xl text-white lg:text-lg">
                Desenvolvimento de Aplicativos móveis
              </h3>
            </div>
            <p className="leading-tight text-luna-gray lg:text-center">
              Fornecemos aplicativos da Web em várias plataformas de código
              aberto para permitir o gerenciamento ideal do orçamento.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="500"
            data-aos-easing="linear"
            className="flex flex-col gap-4 bg-luna-dark p-8"
          >
            <div className="flex flex-row items-center gap-2 lg:flex-col">
              <MonitorIcon size={40} className=" text-luna-pink" />
              <h3 className="text-xl text-white lg:text-lg">
                Desenvolvimento de Softwares
              </h3>
            </div>
            <p className="leading-tight text-luna-gray lg:text-center">
              O site e o comércio eletrônico não precisam ser caros ou
              complicados para serem eficazes. Nós lidamos com um amplo espectro
              de clientes com diferentes orçamentos e necessidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
