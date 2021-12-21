let openSidebar = document.querySelector('.navbar-icon .icon .openSidebar');
            let close = document.querySelector('header .navbar .close')

            openSidebar.addEventListener('click', function () {
                document.body.classList.add('active');
            })

            close.addEventListener('click', function () {
                document.body.classList.remove('active');
            })