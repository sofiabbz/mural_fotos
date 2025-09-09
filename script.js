function abrirFoto(info) {
    // info é tipo 'IMG_2429.jpg: oi', vamos separar nome e descrição
    let partes = info.split(':');
    let src = partes[0].trim();
    let descricao = partes[1] ? partes[1].trim() : '';

    // Cria o modal (modal é basicamente uma “caixa” que aparece por cima da página, geralmente para mostrar algo importante)
    const modal = document.createElement('div');
    modal.id = 'modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '1000';

    // Foto grande
    const img = document.createElement('img');
    img.src = src;
    img.style.maxWidth = '80%';
    img.style.maxHeight = '80%';
    modal.appendChild(img);

    // Descrição
    if(descricao) {
        const desc = document.createElement('p');
        desc.innerText = descricao;
        desc.style.color = 'white';
        desc.style.marginTop = '10px';
        desc.style.fontSize = '20px';
        modal.appendChild(desc);
    }

    // Botão fechar
    const fechar = document.createElement('button');
    fechar.innerText = 'X';
    fechar.style.position = 'absolute';
    fechar.style.top = '10px';
    fechar.style.right = '20px';
    fechar.style.fontSize = '25px';
    fechar.style.cursor = 'pointer';
    fechar.onclick = function() {
        document.body.removeChild(modal);
    };
    modal.appendChild(fechar);

    document.body.appendChild(modal);
}
