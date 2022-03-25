// ************************************** Function Initial Call **************************************
export const CallImgDrop = () => {
  let dropArea = getDropArea();
  let eventNames = ['dragenter', 'dragleave', 'dragover', 'drop'];

  eventNames.forEach(eventName => {
    dropArea.addEventListener(eventName, (event) => {
      preventDefaults(event);
      styleDropArea(eventName);
    });
  });

  dropArea.addEventListener('drop', (event) => {
    handleDrop(event);
  } );
  
}

// ************************************** Function Prevent Default **************************************
const preventDefaults = (event) => {
  event.preventDefault()
  event.stopPropagation()
}

// ************************************** Function to Style Drop Area **************************************
const styleDropArea = (eventName) => {
  let dropArea = getDropArea();
  if (eventName === 'dragenter' || eventName === 'dragover') {
    dropArea.classList.add('highlight');
  };
  if (eventName === 'dragleave' || eventName === 'drop') {
    dropArea.classList.remove('highlight');
  };
}

// ************************************** Function to Handle File **************************************
function handleDrop(event) {
  let dt = event.dataTransfer
  let files = dt.files
  let dropArea = getDropArea();
  let reader = new FileReader();
  
  if (files.length > 1){
    alert('Inserir somente uma imagem');
    return;
  }
  reader.readAsDataURL(files[0]);
  reader.onloadend = () => {
    dropArea.classList.add('imgAdded');
    dropArea.style.backgroundImage = 'url(' + reader.result + ')';
    };
}

// ************************************** Support Functions **************************************
//get drop area
const getDropArea = () => {
  return document.querySelector('[data-imgdrop]');
}






