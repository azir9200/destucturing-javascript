const addToLocalStorage = () => {
  console.log('you click here');
  const idInput = document.getElementById('storage-id');
  const id = idInput.value;
  const valueInput = document.getElementById('value-id');
  const value = valueInput.value;

  localStorage.setItem(id, value);
}