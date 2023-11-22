import { Code2Icon, MonitorIcon, SmartphoneIcon } from "lucide-react";

const ServiceSection = () => {
  return (
    <section id="services" className="bg-luna-blue-dark ">
      <div className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center text-4xl text-white">
          Nossos Serviços
        </h2>
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="bg-luna-dark flex flex-col gap-4 p-8">
            <div className="flex flex-row items-center gap-2 lg:flex-col">
              <Code2Icon size={40} className="text-luna-pink" />
              <h3 className="text-xl text-white">Desenvolvimento de Sites</h3>
            </div>
            <p className="text-luna-gray leading-tight lg:text-center">
              O site e o comércio eletrônico não precisam ser caros ou
              complicados para serem eficazes. Nós lidamos com um amplo espectro
              de clientes com diferentes orçamentos e necessidades.
            </p>
          </div>
          <div className="bg-luna-dark flex flex-col gap-4 p-8">
            <div className="flex flex-row items-center gap-2 lg:flex-col">
              <SmartphoneIcon size={40} className="text-luna-pink" />
              <h3 className="text-xl text-white lg:text-lg">
                Desenvolvimento de Aplicativos móveis
              </h3>
            </div>
            <p className="text-luna-gray leading-tight lg:text-center">
              Fornecemos aplicativos da Web em várias plataformas de código
              aberto para permitir o gerenciamento ideal do orçamento.
            </p>
          </div>
          <div className="bg-luna-dark flex flex-col gap-4 p-8">
            <div className="flex flex-row items-center gap-2 lg:flex-col">
              <MonitorIcon size={40} className=" text-luna-pink" />
              <h3 className="text-xl text-white lg:text-lg">
                Desenvolvimento de Softwares
              </h3>
            </div>
            <p className="text-luna-gray leading-tight lg:text-center">
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
