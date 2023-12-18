document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("scrollButton");

    function update_opacity(){
      var scroll_position = window.scrollY;
      var window_height = window.innerHeight;
      var button_offset = button.offsetTop;

      // Calculate the distance of the button from the center of the viewport
      var button_distance_from_center = button_offset - (scroll_position + window_height / 2);
      
      // Check if the button is above the center of the viewport
      if (button_distance_from_center < 0){
        
        // Adjust the maximum distance as needed
        var max_distance = window_height / 2;

        // Calculate opacity based on the distance from the center
        var opacity = 1 - (Math.abs(button_distance_from_center) / max_distance);
        
        // Ensure opacity is within the range [0, 1]
        opacity = Math.max(0, Math.min(1, opacity));
        
        // Set the button opacity
        button.style.opacity = opacity;
      }
    }
    // adding event handler for scrolling (linking scroll to update_opacity)
    window.addEventListener("scroll", update_opacity);
    // Initial call to set the opacity based on the initial scroll position
    update_opacity();
});

document.addEventListener("DOMContentLoaded", function() {
    var parallax_element = document.querySelector(".parallax");
  
    // Navigate to sibling folder of current folder
    var images_folder = "../images/"

    // Fix this with a fetch call from django later
    var image_filenames = ['image1.jpg', 'image2.jpg'];

    var current_image = 0;
    function update_image(){
        current_image = (current_image + 1) % image_filenames.length;
        
        parallax_element.style.backgroundImage = "url('resources/static/images/" + image_filenames[current_image] + "')";
        console.log(images_folder + image_filenames[current_image]);
    }
    // Change the image every 5 seconds
    setInterval(update_image, 5000);
});
