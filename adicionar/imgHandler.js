// ************************************** Function Initial Call **************************************
export const callImgHandler = () => {
  //Drag and Drop Area
  const imgInput = getImgInput(); //input
  const dropArea = getDropArea();  //drop container
  const eventNames = ['dragenter', 'dragleave', 'dragover', 'drop'];  //drop events

  eventNames.forEach(eventName => {
    dropArea.addEventListener(eventName, (event) => {
      event.preventDefault();
      event.stopPropagation();
      styleDropArea(eventName);
    });
  });

  dropArea.addEventListener('drop', (event) => {
    imgInput.files = event.dataTransfer.files;
    handleDrop(event.dataTransfer.files);
  } );

  //Img Input
  imgInput.addEventListener('change', (event) => {
    handleDrop(event.target.files);
  })

  const deleteButton = document.querySelector('[data-img-deletebutton]');
  //Button - delete chosen image
  deleteButton.addEventListener('click', () => {
    resetDropArea();
    resetInput();
  })

  //submit form
  const submitButton = document.querySelector('[data-submit]');
  const form = document.querySelector('[data-productform]');
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const formStatus = form.checkValidity();

    if(imgInput.value){
      form.reportValidity(); 
      if(formStatus){
        console.log('Form is good', form.elements);
        // form.reset();
        // resetDropArea();
        // resetInput(); 
      }
    } else {
      const spanMsg = document.querySelector('[data-formspan]');
      spanMsg.textContent = "Favor inserir uma imagem para o produto."
      spanMsg.classList.remove('hidden');
      return;
    }
  })
}

// ************************************** Function to Style Drop Area **************************************
const styleDropArea = (eventName) => {
  const dropArea = getDropArea();
  if (eventName === 'dragenter' || eventName === 'dragover') {
    dropArea.classList.add('highlight');
  };
  if (eventName === 'dragleave' || eventName === 'drop') {
    dropArea.classList.remove('highlight');
  };
}

// ************************************** Function to Handle File **************************************
function handleDrop(files) {
  resetDropArea();
  const imgAreaMobile = document.querySelector('[data-imgmobile]')
  const dropArea = getDropArea();
  const spanMsg = document.querySelector('[data-formspan]');
  spanMsg.classList.add('hidden');
  const reader = new FileReader();
  
  if (files.length > 1){
    spanMsg.textContent = "Favor inserir somente uma imagem."
    spanMsg.classList.remove('hidden');
    resetInput();
    return;
  }
  const file = files[0];
  if (file.type && !file.type.startsWith('image/')) {
    spanMsg.textContent = "Favor inserir somente arquivos do tipo imagem."
    spanMsg.classList.remove('hidden');
    resetInput();
    return;
  }

  reader.readAsDataURL(files[0]);
  reader.onloadend = () => {
    dropArea.classList.add('imgAdded');
    dropArea.style.backgroundImage = 'url(' + reader.result + ')';
    imgAreaMobile.style.backgroundImage = 'url(' + reader.result + ')';
  };
}

// ************************************** Support Functions **************************************
//get drop area
const getDropArea = () => {
  return document.querySelector('[data-imgdrop]');
}
const getImgInput = () => {
  return document.querySelector('[data-imginput]');
}
const resetDropArea = () => {
  const imgAreaMobile = document.querySelector('[data-imgmobile]');
  const dropArea = getDropArea();
  dropArea.classList.remove('imgAdded');
  dropArea.style.backgroundImage = 'none';
  imgAreaMobile.style.backgroundImage = 'none';
}
const resetInput = () => {
  const imgInput = getImgInput();
  imgInput.value = "";
}
