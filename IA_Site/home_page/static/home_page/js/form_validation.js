var modal = document.getElementById('myModal');

// Function to open the modal
function open_modal(event) {

    
    modal.classList.add('show');
}

// Function to close the modal
function close_modal() {

  // Get the form and the input fields
  var form = document.querySelector('form');
  var inputs = form.querySelectorAll('input');

  // Loop through the input fields
  for (var i = 0; i < inputs.length; i++) {
    // Remove the required attribute
    inputs[i].removeAttribute('required');
  }

  // Close the modal
  modal.classList.remove('show');
}

// Open the modal when the page loads (you can trigger this based on your requirements)

// Function to validate the form
function validateForm() {
    // Get the form and the input fields
    var form = document.querySelector('form');
    var inputs = form.querySelectorAll('input');
  
    // Loop through the input fields
    for (var i = 0; i < inputs.length; i++) {
        var result = get_error_message(inputs[i].id, inputs[i].value);
      // If the input field is empty
      if (result[0]) {
        // Create the error message
        var errorMessage = document.createElement('div');
        errorMessage.textContent = result[1];
        errorMessage.classList.add('error-message');
        
        // Style the error message
        errorMessage.style.backgroundColor = '#f44336'; // Red background
        errorMessage.style.color = 'white'; // White text
        errorMessage.style.padding = '5px'; // Some padding
        errorMessage.style.borderRadius = '5px'; // Rounded corners
        errorMessage.style.fontSize = '12px'; // Small text size

        // Position the error message
        errorMessage.style.position = 'absolute';
        errorMessage.style.left = inputs[i].offsetLeft + 'px';
        errorMessage.style.top = inputs[i].offsetTop - 10 + 'px';
  
        // Add the error message to the form
        form.appendChild(errorMessage);
  
        // Remove the error message after 3 seconds
        setTimeout(function() {
          form.removeChild(errorMessage);
        }, 3000);
  
        // Prevent the form from being submitted
        return false;
      }
    }
    console.log("Form submitted");
    // If all the input fields are filled out, submit the form
    close_modal();
    return true;
  }
  
  // Add the validateForm function to the form's submit event
  document.querySelector('form').addEventListener('submit', function(event) {
    // Prevent the form from being submitted
    event.preventDefault();
  
    // Validate the form
    validateForm();
  });

function get_error_message(field_id, field_content){
    var name_regex = /^[A-Za-z\s\-]+$/;
    var phone_number_regex = /^\d+$/;
    switch (field_id){
        case "name":
            if (field_content.length != 0){ 
                // True and false denote wether the parrent function should raise an error or not, second value is the error message
                return name_regex.test(field_content) ? [false, ""] : [true, "Please enter a valid name."];
            }
            break;
        case "last-name":
            if (field_content.length != 0){
                return name_regex.test(field_content) ? [false, ""] : [true, "Please enter a valid last name."];
            }
            break;
        case "date-of-birth":
            if (field_content.length != 0){
                const current_date = new Date();
                const user_date = new Date(field_content);
                console.log(current_date.getFullYear() - user_date.getFullYear());
                if (current_date.getFullYear() - user_date.getFullYear() < 18){
                    return [true, "You must be at least 18 years old to register."];
                }
                // check if birthday occured this year
                else if (current_date.getFullYear() - user_date.getFullYear() == 18){
                    if (user_date.getMonth() == current_date.getMonth()){
                        if (current_date.getDay() < user_date.getDay()){
                            return [true, "You must be at least 18 years old to register."];
                        }
                        else{
                            return [false, ""];
                        }
                    }
                    else if (current_date.getMonth() < user_date.getMonth()){
                        return [true, "You must be at least 18 years old to register."];
                    }
                    else{
                        return [false, ""];
                    }
                }
                else if (current_date.getFullYear() - user_date.getFullYear() > 120){
                    return [true, "Please enter a valid date of birth."];
                }
                else{
                    return [false, ""];
                }

            }
            break;
        case "address":
            if (field_content.length != 0){
                var norwegian_address_regex = /^[A-Za-z0-9 _-åøæÅØÆ]+$/;
                return norwegian_address_regex.test(field_content) ? [false, ""] : [true, "Please enter a valid address."];
            }
            break;
        case "postal-code":
            if (field_content.length != 0){
                return phone_number_regex.test(field_content) ? [false, ""] : [true, "Please enter a valid postal code."];
            }
            break;
        case "city":
            if (field_content.length != 0){
                var norwegian_city_regex = norwegianCityNameRegex = /^[A-Za-zÀ-ÿ-]+(?: [A-Za-zÀ-ÿ-]+)?$/;
                return norwegian_city_regex.test(field_content) ? [false, ""] : [true, "Please enter a valid city name."];
            }
            break;
        case "phone-number":
            if (field_content.length != 0){
                return phone_number_regex.test(field_content.split('').filter(char => char !== ' ').join('')) ? [false, ""] : [true, "Please enter a valid phone number."];
            }
            break;
        case "email":
            if (field_content.length != 0){
                return field_content.includes("@")&&field_content.includes(".") ? [false, ""] : [true, "Please enter a valid email."];
            }
            break;
        default:
            return [false, ""];
    }
}