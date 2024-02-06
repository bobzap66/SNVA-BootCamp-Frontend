let appHeader = `
<header class="header">
    <nav class="navbar">
        <a href="mainPage.html">Home</a>
        <a href="account.html">Account</a>
        
        
    </nav>
    
</header>
`;
document.getElementById("app-header").innerHTML = appHeader;

let appSidebar = `
<div class="sidebar">
  <a href="mainPage.html">Home</a>
  <a href="products.html">Products</a>
  <a href="about.html">About</a>
</div>

`;
document.getElementById("app-sidebar").innerHTML = appSidebar;

let appFooter = `
<div class="footer">
  <a href="mainPage.html">Home</a>
  <a href="contact.html">Contact</a>
  <a href="about.html">About</a>
</div>

`;
document.getElementById("app-footer").innerHTML = appFooter;