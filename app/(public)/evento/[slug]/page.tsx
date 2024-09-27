import Evento from "@/components/Evento/Evento";
import { PAGE_NAME } from "@/const";
import { Metadata } from "next";

const eventoData = [
  {
    imagen: "https://cdn.joinnus.com/user/3068910/uiV7JPMHHg0u23D.png",
    color: "99C44F",
    btn_color: "3E51A2",
    slug: "almuerzo-show",
    nombre: "Almuerzo show",
    btn_inicio: '3B3D46'
  },
  {
    imagen: "https://cdn.joinnus.com/user/3068910/sDoZbNGm20Nvvzx.png",
    color: "D066AA",
    btn_color: "C93513",
    slug: "noche-de-folklore",
    nombre: "Noche de folklore",
    btn_inicio: '7D220E'
  },
];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const filteredEvento = eventoData.filter((e) => e.slug === params.slug);

  return {
    title: filteredEvento[0].nombre,
    applicationName: PAGE_NAME,
    openGraph: {
      siteName: PAGE_NAME,
      type: "article",
    },
  };
}

export default function eventoPage({ params }: { params: { slug: string } }) {
  const filteredEvento = eventoData.filter((e) => e.slug === params.slug);

  if (filteredEvento.length === 0) {
    return <div>Evento no encontrado</div>;
  }

  const evento = filteredEvento[0];

  return (
    <>
      <Evento evento={evento} />
    </>
  );
}
