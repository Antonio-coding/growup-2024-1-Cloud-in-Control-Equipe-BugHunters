// Função para criar o componente SVG
function SVGComponent() {
    // Cria o elemento <div> com a classe "img-box"
    const imgBox = document.createElement('div');
    imgBox.classList.add('img-box');

    // Cria o elemento <svg> com os atributos e conteúdo fornecidos
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('version', '1.1');
    svg.setAttribute('id', 'Layer_1');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    svg.setAttribute('x', '0px');
    svg.setAttribute('y', '0px');
    svg.setAttribute('viewBox', '0 0 512 512');
    svg.setAttribute('style', 'enable-background:new 0 0 512 512;');
    svg.setAttribute('xml:space', 'preserve');

    // Cria o elemento <g> com os caminhos do SVG
    const g1 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const g2 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const path4 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    // Define os atributos dos caminhos
    path1.setAttribute('d', '...');
    path2.setAttribute('d', '...');
    path3.setAttribute('d', '...');
    path4.setAttribute('d', '...');
    // Adiciona os caminhos ao elemento <g>
    g1.appendChild(path1);
    g1.appendChild(path2);
    g2.appendChild(path3);
    g2.appendChild(path4);
    // Adiciona os elementos <g> ao elemento <svg>
    svg.appendChild(g1);
    svg.appendChild(g2);

    // Adiciona o elemento <svg> ao elemento <div> img-box
    imgBox.appendChild(svg);

    // Retorna o elemento <div> com o SVG dentro
    return imgBox;
}

// Adiciona o componente SVG ao corpo do documento ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    const svgComponent = SVGComponent();
    document.body.appendChild(svgComponent);
});
