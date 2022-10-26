import Head from 'next/head';
import {useState, useEffect} from 'react';
import {handlePedidos} from '../../src/lib/utils';
import Table from '../../src/components/Table/Table';
import Modal from '../../src/components/Modal/Modal';

export default function Home () {

  const [pedidos, setPedidos] = useState();
  const [pedidoSelecionado, setPedidoSelecionado] = useState();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetch('/data.txt')
      .then(response => response.text())
      .then(text => setPedidos(handlePedidos(text)));
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        id={pedidoSelecionado}
        setPedidos={setPedidos}
        pedidos={pedidos}
      />
      <Table
        pedidos={pedidos}
        setOpen={setOpenModal}
        setPedidoSelecionado={setPedidoSelecionado}
      />
    </>
  );
}
