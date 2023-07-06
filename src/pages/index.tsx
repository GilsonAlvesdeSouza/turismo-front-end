import Head from "next/head";

import * as S from "./index.style";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gestão de Viagens</title>
      </Head>
      <S.Container>
        <S.Title>Hello world!!</S.Title>
      </S.Container>
    </>
  );
}
