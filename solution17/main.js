const submit = document.getElementById("btn-submit");

document.getElementById('contant-form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (this.checkValidity()) {
        document.getElementById('success-message').style.display = 'block';
      }
});



  const generalEnquiry = document.getElementById("form-box form-box-check-1");
  const suppoerRequest = document.getElementById("form-box form-box-check-2");
  const custom1 = document.getElementById("custom-1");
  const selected1 = document.getElementById("selected-1");
  const custom2 = document.getElementById("custom-2");
  const selected2 = document.getElementById("selected-2");

  generalEnquiry.addEventListener('click', function() {
    generalEnquiry.classList.add('active');
    suppoerRequest.classList.remove('active');
    custom1.style.display = 'none';
    selected1.style.display = 'block';
    custom2.style.display = 'block';
    selected2.style.display = 'none';
  });

  suppoerRequest.addEventListener('click', function() {
    generalEnquiry.classList.remove('active');
    suppoerRequest.classList.add('active');
    custom2.style.display = 'none';
    selected2.style.display = 'block';
    custom1.style.display = 'block';
    selected1.style.display = 'none';
  });

  const checkbox1 = document.getElementById("custom-checkbox-not-rounded");
  const checkBoxLabel = document.getElementById("custom-checkbox-not-rounded-label");
  const checkBox = document.getElementById("check-checked");

  checkBox.addEventListener('click', function() {
    checkBox.classList.toggle('checked');
    checkBoxLabel.classList.toggle('hidden');
  });

  checkBoxLabel.addEventListener('click', function() {
    checkBox.classList.toggle('checked');
    checkBoxLabel.classList.toggle('hidden');
  });

  checkbox1.addEventListener('click', function() {
    checkBox.classList.toggle('checked');
    checkBoxLabel.classList.toggle('hidden');
  });

  