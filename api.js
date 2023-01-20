//Direccion de la base de datos

const API = 'http://192.168.10.193:3000/task';

export const getTasks = async () => {
	const res = await fetch(API);
    return await res.json();
}

export const saveTask = async (newTask) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });
  return await res.json();
};

export const getOneTask = async (id) => {
  const res = await fetch(`${API}/${id}`);
  return await res.json();
};

export const updateTask = async (id, newTask) => {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });
  return res;
};

export const deleteTask = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};
