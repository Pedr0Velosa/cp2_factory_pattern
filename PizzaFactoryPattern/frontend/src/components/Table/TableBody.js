import React from 'react';
import {FaTimesCircle} from 'react-icons/fa';

const TableBody = ({pedidos, setOpen, setPedidoSelecionado}) => {

  const handleClick = (id) => {
    setPedidoSelecionado(id);
    setOpen(true);
  };

  return (
    <>
      <tbody>
        {
          pedidos?.map((pedido) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={pedido.id}>
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {pedido.id}
              </th>
              <td className="py-4 px-6">
                {pedido.cliente}
              </td>
              <td className="py-4 px-6 inline-flex w-full">
                <p>
                  {pedido.pizza}
                </p>
                <button
                  className='ml-auto'
                  onClick={() => handleClick(pedido.id)}
                >
                  <FaTimesCircle size={'1.5em'} className='fill-red-500' />
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </>
  );
};

export default TableBody;