/* eslint-disable jsx-a11y/alt-text */
import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/profile.png";

import React from "react";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Bem-vindo ao meu blog pessoal!</h1>

        <p className={styles.paragrafo}>
          Olá! Meu nome é Vinicius Carvalho, tenho 36 anos
          e sou um estudante de Front-end com foco em React na Alura. Neste
          espaço, compartilho minhas experiências, aprendizados e conhecimentos
          na área de desenvolvimento Front-end. Espero que possa aprender algo
          novo e trocarmos ideias sobre o mundo do desenvolvimento web. Obrigado
          por visitar meu blog!
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          src={circuloColorido}
          aria-hidden={true}
          className={styles.circuloColorido}
        />
        <img src={minhaFoto} aria-hidden={true} className={styles.minhaFoto} />
      </div>
    </div>
  );
}
