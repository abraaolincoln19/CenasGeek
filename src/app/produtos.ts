export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "One-Punch Man", preco: 1200.00, descricaoPreco: "À vista no PIX", imagem: "./assets/1.jpg", quantidadeEstoque: 6 },
    { id: 2, descricao: "Senhor das Estrelas", preco: 200.00, descricaoPreco: "À vista no PIX", imagem: "./assets/2.jpg", quantidadeEstoque: 2 },
    { id: 3, descricao: "Spiderman", preco: 749.99, descricaoPreco: "À vista no PIX", imagem: "./assets/3.jpg", quantidadeEstoque: 3 },
    { id: 4, descricao: "Cell", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "./assets/4.jpg", quantidadeEstoque: 5 },
    { id: 5, descricao: "Gundam", preco: 299.99, descricaoPreco: "À vista no PIX", imagem: "./assets/5.jpg" , quantidadeEstoque: 10},
    { id: 6, descricao: "Luffy", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "./assets/6.jpg", quantidadeEstoque: 10 },
    { id: 7, descricao: "Kakashi", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "./assets/7.jpg", quantidadeEstoque: 10},
    { id: 8, descricao: "Pantera Negra", preco: 2499.99, descricaoPreco: "À vista no PIX", imagem: "./assets/8.jpg", quantidadeEstoque: 10 },
    { id: 9, descricao: "Zoro", preco: 1000, descricaoPreco: "À vista no PIX", imagem: "./assets/9.jpg", quantidadeEstoque: 10 },
    { id: 10, descricao: "Attack On Titan", preco: 2500, descricaoPreco: "À vista no PIX", imagem: "./assets/10.jpg", quantidadeEstoque: 10 },
    { id: 11, descricao: "Vegeta", preco: 4500, descricaoPreco: "À vista no PIX", imagem: "./assets/11.jpg", quantidadeEstoque: 10 },
    { id: 12, descricao: "Mestre Kame", preco: 20, descricaoPreco: "À vista no PIX", imagem: "./assets/12.png", quantidadeEstoque: 10 },
    { id: 13, descricao: "Deadpool", preco: 200, descricaoPreco: "À vista no PIX", imagem: "./assets/13.jpg", quantidadeEstoque: 10 },
    { id: 14, descricao: "Thor", preco: 150, descricaoPreco: "À vista no PIX", imagem: "./assets/14.jpg", quantidadeEstoque: 10 },
    { id: 15, descricao: "Iron Man", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/15.jpg", quantidadeEstoque: 10 },
]