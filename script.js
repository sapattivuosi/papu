// Function to load the navigation bar
function loadNavBar() {
  const navbarHTML = `
  
  <span class="site-title">Helsingin Psykoterapia</span>
  
    <div class="topnav" id="myTopnav">
      <a href="index.html" class="nav-link">Etusivu</a>
      <a href="mina.html" class="nav-link">Minä</a>
      <a href="psykoterapia.html" class="nav-link">Psykoterapia</a>
      <a href="tyonohjaus.html" class="nav-link">Työnohjaus</a>
      <a href="yhteystiedot.html" class="nav-link">Yhteystiedot</a>

    </div>
    
<!-- Select dropdown for small screens -->
<div class="select-container">
<select class="topnav-select" id="topnavSelect" onchange="navigateToPage(this)">
    <option value="index.html">Etusivu</option>
    <option value="mina.html">Minä</option>
    <option value="psykoterapia.html">Psykoterapia</option>
    <option value="tyonohjaus.html">Työnohjaus</option>
    <option value="yhteystiedot.html">Yhteystiedot</option>
</select>
</div>

  `;

  // Insert the navigation bar into the div with id="navbar"
  document.getElementById('navbar').innerHTML = navbarHTML;
}

// Function to toggle the responsive class
function toggleNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function navigateToPage(select) {
    var url = select.value;
    if (url) {
        window.location.href = url; // Navigate to the selected page
    }
}

// Function to set the current page in the dropdown
function setSelectedOption() {
	// Get the current URL path
	const currentPath = window.location.pathname.replace(/^\//, "");

	// Get all nav links
	const navLinks = document.querySelectorAll('.nav-link');

	// Loop through the nav links to find the selected one
	let selectedMenuItem = null;
	navLinks.forEach(link => {
		// Strip leading slashes for comparison
		const linkPath = link.getAttribute('href').replace(/^\//, "");
		// Compare link path with the current path
		if (currentPath === linkPath) {
			link.classList.add("active"); // Adds the 'active' class to highlight 
		}
	});

    const select = document.getElementById('topnavSelect');
    var currentPage = window.location.pathname; // Get the current path
     // Strip the leading / from currentPage
    currentPage = currentPage.substring(1);


    const options = select.options;

    // Loop through the options to find and select the current page
    for (let i = 0; i < options.length; i++) {
        if (options[i].value === currentPage) {
            options[i].selected = true;
            break;
        }
    }
}

// Call setSelectedOption when the page loads
window.onload = setSelectedOption;

// Load the navigation bar when the document is ready
document.addEventListener('DOMContentLoaded', loadNavBar);