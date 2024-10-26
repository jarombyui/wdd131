const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate product options
window.onload = function () {
  const productSelect = document.getElementById('productName');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
};

// Counter for reviews in localStorage
if (window.location.pathname.endsWith('review.html')) {
  let reviewCount = localStorage.getItem('reviewCount') || 0;
  reviewCount++;
  localStorage.setItem('reviewCount', reviewCount);
  console.log(`Total reviews submitted: ${reviewCount}`);
}



// const products = [
//     { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
//     { id: "fc-2050", name: "power laces", averagerating: 4.7 },
//     { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
//     { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
//     { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
//   ];
  
//   // Dynamically populate the product dropdown
//   const productDropdown = document.getElementById('product-name');
//   products.forEach(product => {
//     const option = document.createElement('option');
//     option.value = product.id;
//     option.textContent = product.name;
//     productDropdown.appendChild(option);
//   });
  
//   // Track form submissions in localStorage
//   if (!localStorage.getItem('reviewCounter')) {
//     localStorage.setItem('reviewCounter', 0);
//   }
  
//   document.querySelector('form').addEventListener('submit', function() {
//     let counter = parseInt(localStorage.getItem('reviewCounter'));
//     localStorage.setItem('reviewCounter', ++counter);
//   });

//   document.getElementById("currentyear").textContent = new Date().getFullYear();

// // Get the last modified date for the footer
// document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
  