import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({pedidos, setOpen, setPedidoSelecionado}) => {
  return (
    <>
      <div className="overflow-x-auto relative max-w-[800px] mx-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <TableHead />
          <TableBody pedidos={pedidos} setOpen={setOpen} setPedidoSelecionado={setPedidoSelecionado} />
        </table>
      </div>
    </>
  );
};

export default Table;