 
 function slider() {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.createElement('button');
    toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
    toggleButton.classList.add('sidebar-toggle');
    document.querySelector('.header').appendChild(toggleButton);
    
    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
  }


const searchButton = document.querySelector('.search-bar button');
searchButton.addEventListener('click', () => {
    const query = document.querySelector('.search-bar input').value;
    alert(`You searched for: ${query}`);
});

const createButton = document.querySelector('.create-button');
createButton.addEventListener('click', () => {
    alert('Create button clicked!');
});