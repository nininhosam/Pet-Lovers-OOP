import BarraDeNavegacao from "@/modules/barra_navegacao";
import ContentArea from "@/modules/content_area";

export default function Home() {
  return (
    <main className='h-full min-h-dvh'>
      <BarraDeNavegacao/>
      <ContentArea className="relative">
        <img src="/mefunky.png" alt="Main Image" className="min-h-max"/>
        {/* <img src="/md10.gif" alt="Me da 10 :D" className="h-24 absolute bottom-1/3"/> */}
        <span className="tiltnmove rainbow absolute bottom-1/3 h-24">Me da 10 :D</span>
      </ContentArea>
    </main>
  );
}
