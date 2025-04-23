import Navbar from "@/components/Navbar"
import { Carousel } from 'primereact/carousel';
import { Playwrite_AU_SA } from 'next/font/google';
import Image from "next/image";


const font = Playwrite_AU_SA({
  weight: ["400"],
  subsets: ['latin'],
});

export default function Home() {
  
  const products = [
    { id: 1, name: 'Produto 1', image: '/foto1.jpg' },
    { id: 2, name: 'Produto 2', image: '/foto2.jpg' },
    { id: 3, name: 'Produto 3', image: '/foto3.jpg' },
];

  const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 2,
        numScroll: 1
    }
];
  const productTemplate = (product: any) => {
    return (
        <div className="flex flex-col items-center">
            <img src={product.image} alt={product.name} className="w-32 h-32 object-cover" />
            <h3 className="text-lg font-bold mt-2">{product.name}</h3>
        </div>
    );
  };

  return (
    <div className={`${font.className}`}>
      <Navbar/>
      <a
            href="https://wa.me/5533999315458?text=Oi%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais%21"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-10 right-0 m-2 z-10"
          >
            <Image
              src="/wpp.png"
              alt="Fale conosco no WhatsApp"
              width={70}
              height={70}
            />
          </a>
      <h2 id="inicio" className="pt-[86px]"></h2>
      <video autoPlay loop muted className="w-full">
        <source src={`/video1.mp4`}/>
      </video>

      <div className="mt-10">
        <h2 id="portifolio" className={`flex font-bold justify-center`}>Portfólio</h2>
        <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="mt-10 custom-carousel" circular autoplayInterval={3000} itemTemplate={productTemplate} />
      </div>

      <div className="flex flex-col mt-10">
        <div className="m-10 flex items-center justify-start">
          <a href="/portifolio">
            <Image src="/instagram.jpg" width={180} height={180} />
            <span className="text-[12px] ml-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </span>
          </a>
        </div>
        <div className="m-10 flex items-center justify-end">
          <span className="text-[12px] ml-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </span>
          <Image src="/instagram.jpg" width={180} height={180} />
        </div>
        <div className="m-10 flex items-center justify-start">
          <Image src="/instagram.jpg" width={180} height={180} />
          <span className="text-[12px] ml-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </span>
        </div>
      </div>

      <div className="mt-10">
        <Image
          src="/teste.png"
          alt="teste"
          width={1000}
          height={500}
          className="w-full h-auto object-cover"
        />
        <Image
          src="/teste2.png"
          alt="teste"
          width={1000}
          height={500}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className=""><h2>
        <video src="/video2.mp4" autoPlay loop muted className="w-full"></video>
        <div className="flex mt-10 justify-center items-center">
          <video src="/video2.mp4" autoPlay loop muted className="w-[200px]"></video>
          <p className="text-[12px] mx-2 ">Meu nome é Maria Ferraz. Sou estudante de Marketing, criadora de
            conteúdo digital, storymaker mobile e especialista em transformar
            rotinas reais em narrativas que conectam. Acredito na força da
            autenticidade e na emoção como estratégia de venda. Com um olhar atento
            e criativo, entrego muito além de estética: entrego resultado.</p>
        </div>
      </h2></div>

      <div className="bg-gray-300 mt-10 pb-10">
        <h2 id="sobremim" className={`flex font-bold justify-center text-[#020913] pt-10`}>Sobre mim</h2>
        <div className="mt-10 mx-5 overflow-auto">
          <Image
            src="/perfil.png"
            alt="pefil"
            width={500}
            height={500}
            className="float-left object-cover w-40 h-40 mr-3 rounded-full border-2 border-gray-300 shadow-md"
          />
          <span className="text-[12px] ml-4 mt-10 text-[#020913] text-center">
            Meu nome é Maria Ferraz. Sou estudante de Marketing, criadora de
            conteúdo digital, storymaker mobile e especialista em transformar
            rotinas reais em narrativas que conectam. Acredito na força da
            autenticidade e na emoção como estratégia de venda. Com um olhar atento
            e criativo, entrego muito além de estética: entrego resultado.
            Atuo com cobertura de eventos, produção de vídeos, fotos, roteiros e
            edições que geram engajamento real. Crio stories estratégicos que vendem
            e reels que aproximam marcas de pessoas. Também gerencio perfis no
            Instagram mensalmente, com foco total em crescimento orgânico, conversão
            e posicionamento de valor.
          </span>
        </div>
      </div>

      <div className= "mt-10 h-[500px]">
      <h2 id="sobremim" className={`flex font-bold justify-center pt-10`}>Contato</h2>
      </div>

    </div>
  );
}
