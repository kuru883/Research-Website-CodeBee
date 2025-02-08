function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('minimized');
}

function minimizeSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar.classList.contains('minimized')) {
        sidebar.classList.add('minimized');
    }
}

function toggleSubmenu() {
    const submenu = document.querySelector('.submenu');
    submenu.classList.toggle('show');
    minimizeSidebar(); // Minimize sidebar after clicking
}

function showCompiler(type) {
    const content = document.getElementById('content');
    if (type === 'javacompiler') {
        // Clear content first
        content.innerHTML = `
            <h1>Java Compiler</h1>
            <div data-pym-src="https://www.jdoodle.com/embed/v1/34e2bf0c02fc389"></div>
        `;

        // Dynamically create and append the script tag
        const script = document.createElement('script');
        script.src = "https://www.jdoodle.com/assets/jdoodle-pym.min.js";
        script.type = "text/javascript";
        content.appendChild(script);
    } else {
        
        content.innerHTML = ' <h1></h1>'; // Clear content if not Java compiler
    }

    // Minimize sidebar after clicking
    minimizeSidebar();
}
function logout() {
    window.location.href = 'index.html'; // Redirect to the home page
}
