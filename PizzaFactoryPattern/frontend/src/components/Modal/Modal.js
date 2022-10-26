import React, {useEffect} from 'react';
import EscapeButton from './EscapeButton';
import Body from './Body';

const Modal = ({id, open, setOpen, setPedidos, pedidos}) => {

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' || e.code === 'Escape') return setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!open) return;

  return (
    <>
      <div id="popup-modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center"
        style={{backgroundColor: 'rgba(30,30,30,0.5'}}
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto mx-auto mt-40">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <EscapeButton setOpen={setOpen} />
            <Body setOpen={setOpen} id={id} setPedidos={setPedidos} pedidos={pedidos} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;