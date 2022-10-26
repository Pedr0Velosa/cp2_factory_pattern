const handleObject = (pedido) => {
  const keys = pedido.split('/');
  const values = keys.map(key => key.split(':')[1]);
  const obj = {
    id: values[0].replace(" ", ""),
    cliente: values[1].replace(" ", ""),
    pizza: values[2].replace(" ", "")
  };
  if (obj.pizza === "") return;
  return obj;
};

const handleData = (data) => {
  const newData = data.map(pedido => handleObject(pedido));
  return newData.filter(data => data !== undefined);
};

export const handlePedidos = (data) => {
  let array = data.split("\n");
  array = array.map((v) => v.replace('\r', ''));
  array = array.filter((v) => v !== "");
  return handleData(array);
};