import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.jpg";
import fotoSobreMim from "assets/pessoa-programando.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="SobreMim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Vinicius!</h3>
      <img
        className={styles.fotoSobreMim}
        src={fotoSobreMim}
        alt="Foto de pessoa programando"
      />

      <p className={styles.paragrafo}>
        Minha jornada na programação começou cedo, quando eu costumava ficar
        inspecioanndo os códigos das páginas web ao qual eu navegava.
      </p>
      <p className={styles.paragrafo}>
        Foi somente após conhecer os cursos do Prof. Guanabara no YouTube que
        decidi aprofundar meus conhecimentos. Eu vi que programação poderia se
        tornar uma profissão. A partir daí, comecei a explorar o mercado e
        descobri que o front-end era a área que mais combinava comigo, já que eu
        gostava de criar sites e aplicativos Android.
      </p>
      <p className={styles.paragrafo}>
        Então, comecei a aprender JavaScript, CSS e HTML por meio de cursos
        gratuitos e ingressei na graduação de Análise e Desenvolvimento de
        Sistemas onde aperfeiçoei aina mais meus conhecimentos e tenho certeza
        de que estou pronto para atuar como desenvolvedor no mercado.
      </p>
      <p className={styles.paragrafo}>
        A programação se tornou minha paixão e estou animado para compartilhar
        minhas experiências e conhecimentos com vocês aqui no meu blog. Sejam
        bem-vindos(as)!
      </p>
    </PostModelo>
  );
}
