export const initCart = () => {
    const trigger = document.getElementById('cart-trigger');
    const closeBtn = document.getElementById('cart-close');
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    const cartCount = document.getElementById('cart-count');
    const addBtns = document.querySelectorAll('.add-to-cart');

    let count = 2; // Começa com 2 itens dummy
    
    // Atualiza contador inicial
    if(cartCount) cartCount.innerText = count;

    function openCart() {
        drawer.classList.add('open');
        overlay.classList.add('open');
    }

    function closeCart() {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
    }

    if (trigger) trigger.addEventListener('click', openCart);
    if (closeBtn) closeBtn.addEventListener('click', closeCart);
    if (overlay) overlay.addEventListener('click', closeCart);

    // Lógica simples de adicionar
    if (addBtns) {
        addBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                count++;
                if(cartCount) cartCount.innerText = count;
                
                // Feedback visual simples
                const originalText = btn.innerText;
                btn.innerText = "ADICIONADO";
                btn.style.background = "#ff3c00"; // Usando a cor de acento hardcoded ou via classe
                btn.style.color = "black";
                
                // Abre o carrinho para mostrar feedback
                openCart();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = "";
                    btn.style.color = "";
                }, 1000);
            });
        });
    }
};
