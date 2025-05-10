const dropArea = document.querySelector('#drop-area');
const fileInput = document.querySelector('#fileInput');
const previewImage = document.querySelector('#previewImage');
const placeholder = document.querySelector('#placeholder');
const removeBtn = document.querySelector('#removeBtn');

const showPreview = src => {
  previewImage.setAttribute('src', src);
  previewImage.style.display = 'block';
  placeholder.style.display = 'none';
  removeBtn.style.display = 'block';
}

fileInput.addEventListener('change', e => {
  const file = e.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = () => showPreview(reader.result);
    reader.readAsDataURL(file);
  }
});

['dragenter', 'dragover'].forEach(event => {
  dropArea.addEventListener(event, e => {
    e.preventDefault();
    dropArea.classList.add('dragover')
  });
});

['dragleave', 'drop'].forEach(event => {
  dropArea.addEventListener(event, e => {
    e.preventDefault();
    dropArea.classList.remove('dragover');
  });
});

dropArea.addEventListener('drop', e => {
  const file = e.dataTransfer.files[0];
  if(file && file.type.startsWith('image/')){
    const reader = new FileReader();
    reader.onload = () => showPreview(reader.result);
    reader.readAsDataURL(file);
  }
});

removeBtn.addEventListener('click', () => {
  previewImage.removeAttribute('src');
  previewImage.style.display = 'none';
  removeBtn.style.display = 'none';
  placeholder.style.display = 'block';
  fileInput.value = '';
});