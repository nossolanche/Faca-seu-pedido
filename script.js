const cardapio = [
  
  //HAMBURGUER CLASSICO
  {id: 'hh1', name: 'Duplo X-egg', desc: 'Pão de hambúrguer, 2 carnes de hambúrguer, 2 ovos, mussarela, presunto, alface, tomate, cheddar cremoso.', price: 16.00, category: 'hamburguer'},
  {id: 'hh2', name: 'Duplo Simples', desc: 'Pão de hambúrguer, 2 carne de hambúrguer, 2 mussarela, 2 presunto, tomate, alface e molhos', price: 15.00, category: 'hamburguer'},
  {id: 'hh3', name: 'X-calabresa', desc: 'Pão de hambúrguer, carne de hambúrguer, calabresa, cebola dourada, mussarela, presunto, salada, cheddar e molhos', price: 18.50, category: 'hamburguer'}, 
  {id: 'hh4', name: 'X-calafrango', desc: 'Pão de hambúrguer, carne de hambúrguer, salada, frango desfiado, calabresa, mussarela, presunto e molho', price: 18.50, category: 'hamburguer'},
  {id: 'hh5', name: 'X-egg', desc: 'Pão de hambúrguer, presunto, mussarela, ovo, carne de , tomate, alface, mussarela, e molhos', price: 13.50, category: 'hamburguer'},
  {id: 'hh6', name: 'X-egg Bacon', desc: 'Pão de hambúrguer, carne frisa, ovo, bacon, salada, mussarela, presunto, e molhos', price: 18.50, category: 'hamburguer'},
  {id: 'hh7', name: 'X-tudo Tradicional', desc: 'Pão de hambúrguer, carne de hambúrguer, alface, tomate, mussarela, presunto, bacon, frango desfiado, calabresa, ovo e milho verde', price: 23.00, category: 'hamburguer'},
  {id: 'hh8', name: 'X-frango', desc: 'Pão de Hamburguer, carne de hamburguer de frango,frango desfiado, batata palha, mussarela, presunto,salada e cheddar cremoso.', price: 18.50, category: 'hamburguer'},
  {id: 'hh9', name: 'X-tudão tradicional', desc: 'Pão de hamburguer, 2 carnes, 2 ovos, frango desfiado, bacon, calabresa, mussarela, presunto, alface, tomate, milho e cheddar cremoso.', price: 27.00, category: 'hamburguer'},
  {id: 'hh10', name: 'B-Frango', desc: 'Pão de Hamburguer, frango desfiado, presunto, salada, mussarela e cheddar cremoso.', price: 15.00, category: 'hamburguer'},
  {id: 'hh11',  name: 'Simples', desc: 'Pão de hamburguer, carne de hamburguer, salada, mussarela derretida, presunto e cheddar cremoso.', price: 12.00, category: 'hamburguer'},



  
  // 🍔 HAMBÚRGUER GOURMET
  { id: 'h1', name: 'Clássico', desc: 'Pão de Hambúrguer, carne bovina 100g, mussarela, alface e tomates selecionados, cebola dourada e cheddar cremoso.', price: 18.00, category: 'hamburguerg' },
  { id: 'h2', name: 'Grill', desc: 'Pão de Hambúrguer, carne bovina 200g, alface e tomates selecionados, presunto, bacon, mussarela, ovo e cheddar cremoso.', price: 25.00, category: 'hamburguerg' },
  { id: 'h3', name: 'Nordestino', desc: 'Pão de Hambúrguer, carne bovina 100g, queijo coalho selado, alface e tomates selecionados, presunto e cheddar cremoso.', price: 19.00, category: 'hamburguerg' },
  { id: 'h4', name: 'Tradicional', desc: 'Pão de Hambúrguer, carne bovina 100g, alface e tomates selecionados, presunto, mussarela e cheddar cremoso.', price: 15.00, category: 'hamburguerg' },
  { id: 'h5', name: 'X-Bacon', desc: 'Pão de Hambúrguer, carne bovina 100g, alface e tomates selecionados, presunto, mussarela, ovo, bacon e cheddar cremoso.', price: 19.00, category: 'hamburguerg' },
  { id: 'h6', name: 'N. Burguer', desc: 'Pão de Hambúrguer, carne bovina 150g, mussarela, molho barbecue, cebola caramelizada e cheddar cremoso.', price: 19.00, category: 'hamburguerg' },
  { id: 'h7', name: 'Especial', desc: 'Pão de Hambúrguer, carne bovina 100g, mussarela, requeijão cremoso, bacon, cebola caramelizada e cheddar cremoso.', price: 18.00, category: 'hamburguerg' },
  { id: 'h8', name: 'X-Tudo', desc: 'Pão de Hambúrguer, carne bovina 100g, alface e tomates selecionados, mussarela, presunto, bacon, frango desfiado, calabresa defumada, ovos, milho verde e cheddar cremoso.', price: 25.00, category: 'hamburguerg' },
  { id: 'h9', name: 'Casa', desc: 'Pão de Hambúrguer, carne bovina 100g, alface e tomates selecionados, mussarela, presunto, frango desfiado, ovos, milho e cheddar cremoso.', price: 19.00, category: 'hamburguerg' },

  // 🥖 BAGUETES
  { id: 'bag1', name: 'Baguete de Costela 20cm', desc: 'Pão 20 cm, requeijão cremoso, barbecue, cebola caramelizada e costela.', price: 21.00, category: 'baguete' },
  { id: 'bag2', name: 'Baguetinha de Costela 13cm', desc: 'Pão 13 cm, requeijão cremoso, barbecue, cebola caramelizada e costela.', price: 14.00, category: 'baguete' },
  { id: 'bag3', name: 'Baguete de Toscana 20cm', desc: 'Pão 20 cm, requeijão cremoso, barbecue, vinagrete e toscana.', price: 21.00, category: 'baguete' },
  { id: 'bag4', name: 'Baguetinha de Toscana 13cm', desc: 'Pão 13 cm, requeijão cremoso, barbecue, vinagrete e toscana.', price: 14.00, category: 'baguete' },

  // 🥟 PASTÉIS ESPECIAIS
  { id: 'past1', name: 'Pastel Carne do Sol', desc: 'Carne do sol, queijo e cebola caramelizada.', price: 13.00, category: 'pastelespeciais' },
  { id: 'past2', name: 'Pastel Big Pizza', desc: 'Tomate, mussarela, presunto, orégano, catupiry, milho.', price: 13.00, category: 'pastelespeciais' },
  { id: 'past3', name: 'Pastel Calabresa', desc: 'Calabresa, queijo e cebola caramelizada.', price: 13.00, category: 'pastelespeciais' },
  { id: 'past4', name: 'Pastel Frango', desc: 'Frango, queijo e milho.', price: 14.00, category: 'pastelespeciais' },
  { id: 'past5', name: 'Pastel Romeu e Julieta', desc: 'Queijo coalho e goiabada.', price: 11.00, category: 'pastelespeciais' },
  { id: 'past6', name: 'Pastel Carne moída', desc: 'Carne moída, milho e orégano.', price: 12.00, category: 'pastelespeciais' },
  { id: 'past7', name: 'Pastel Misto', desc: 'Calabresa, frango, carne moída.', price: 12.00, category: 'pastelespeciais' },
  { id: 'past8', name: 'Pastel Pizza', desc: 'Mussarela, presunto, tomate e orégano.', price: 9.00, category: 'pastelespeciais' },
  { id: 'past9', name: 'Pastel Sem Recheio', desc: 'Pastel sem recheio.', price: 5.00, category: 'pastelespeciais' },
  { id: 'past10', name: 'Pastel Frango 2', desc: 'Frango, milho e orégano.', price: 12.00, category: 'pastelespeciais' },
  { id: 'past11', name: 'Pastel Costela', desc: 'Costela , queijo e cebola caramelizada', price: 13.00, category: 'pastelespeciais' },
  { id: 'past12', name: 'Pastel carne de sol 2', desc: 'Carne de sol, milho e orégano.', price: 13.00, category: 'pastelespeciais' },
  
  // 🥟 PASTÉIS

  { id: 'past13', name: 'Pastel de Carne', desc: 'Carne', price: 10.00, category: 'pastel' },
  { id: 'past14', name: 'Pastel de Carne e Queijo', desc: 'Carne, queijo', price: 13.00, category: 'pastel' },
  { id: 'past15', name: 'Pastel de Carne e Cheddar', desc: 'Carne, cheddar', price: 12.00, category: 'pastel' },
  { id: 'past16', name: 'Pastel de Carne e Catupiry', desc: 'Carne, catupiry', price: 12.00, category: 'pastel' },
  { id: 'past17', name: 'Pastel de Carne e Milho', desc: 'Carne, milho', price: 12.00, category: 'pastel' },
  { id: 'past18', name: 'Pastel de Frango', desc: 'Frango', price: 10.00, category: 'pastel' },
  { id: 'past19', name: 'Pastel de Frango e Queijo', desc: 'Frango, queijo', price: 13.00, category: 'pastel' },
  { id: 'past20', name: 'Pastel de Frango e Milho', desc: 'Frango, milho', price: 12.00, category: 'pastel' },
  { id: 'past21', name: 'Pastel de Frango e Cheddar', desc: 'Frango, cheddar', price: 12.00, category: 'pastel' },
  { id: 'past22', name: 'Pastel de Frango e Catupiry', desc: 'Frango, catupiry', price: 12.00, category: 'pastel' },
  { id: 'past23', name: 'Pastel de Carne do Sol', desc: 'Carne do sol', price: 11.00, category: 'pastel' },
  { id: 'past24', name: 'Pastel de Carne do Sol e Queijo', desc: 'Carne do sol, queijo', price: 13.50, category: 'pastel' },
  { id: 'past25', name: 'Pastel de Carne do Sol e Milho', desc: 'Carne do sol, milho', price: 13.00, category: 'pastel' },
  { id: 'past26', name: 'Pastel de Carne do Sol e Cheddar', desc: 'Carne do sol, cheddar', price: 13.00, category: 'pastel' },
  { id: 'past27', name: 'Pastel de Carne do Sol e Catupiry', desc: 'Carne do sol, catupiry', price: 13.00, category: 'pastel' },
  { id: 'past28', name: 'Pastel de Queijo Coalho', desc: 'Queijo coalho', price: 10.00, category: 'pastel' },
  { id: 'past29', name: 'Pastel de Queijo e Orégano', desc: 'Queijo, orégano', price: 11.00, category: 'pastel' },
  { id: 'past30', name: 'Pastel de Mussarela e Presunto', desc: 'Mussarela, presunto', price: 8.00, category: 'pastel' },
  { id: 'past31', name: 'Pastel de Mussarela', desc: 'Mussarela', price: 8.00, category: 'pastel' },
  { id: 'past32', name: 'Pastel de Presunto', desc: 'Presunto', price: 8.00, category: 'pastel' },
  { id: 'past33', name: 'Pastel de Calabresa', desc: 'Calabresa', price: 10.00, category: 'pastel' },
  { id: 'past34', name: 'Pastel de Calabresa e Queijo Coalho', desc: 'Calabresa, queijo coalho', price: 13.00, category: 'pastel' },
  { id: 'past35', name: 'Pastel de Calabresa e Cheddar', desc: 'Calabresa, cheddar', price: 12.00, category: 'pastel' },
  { id: 'past36', name: 'Pastel de Calabresa e Catupiry', desc: 'Calabresa, catupiry', price: 12.00, category: 'pastel' },
  { id: 'past37', name: 'Pastel de Calabresa e Milho', desc: 'Calabresa, milho', price: 12.00, category: 'pastel' },

  // 💰 ACRÉSCIMOS
  { id: 'ac1', name: 'Carne moída', desc: '', price: 5.00, category: 'acrescimo' },
  { id: 'ac2', name: 'Frango', desc: '', price: 5.00, category: 'acrescimo' },
  { id: 'ac3', name: 'Queijo coalho', desc: '', price: 5.00, category: 'acrescimo' },
  { id: 'ac4', name: 'Calabresa', desc: '', price: 5.00, category: 'acrescimo' },
  { id: 'ac5', name: 'Carne do Sol', desc: '', price: 5.00, category: 'acrescimo' },
  { id: 'ac6', name: 'Vinagrete', desc: '', price: 3.00, category: 'acrescimo' },
  { id: 'ac7', name: 'Mussarela', desc: '', price: 2.00, category: 'acrescimo' },
  { id: 'ac8', name: 'Presunto', desc: '', price: 2.00, category: 'acrescimo' },
  { id: 'ac9', name: 'Milho', desc: '', price: 2.00, category: 'acrescimo' },

  // BATATAS 
  { id: 'b1', name: 'Batata Frita 200g', desc: 'Com cheddar e bacon', price: 16.00, category: 'batata' },
  { id: 'b2', name: 'Batata Frita 200g', desc: 'Apenas Batata', price: 10.00, category: 'batata' },
  { id: 'b3', name: 'Batata Frita 200g', desc: 'Com catupiry e bacon', price: 16.00, category: 'batata' },
  { id: 'b4', name: 'Batata Frita 350g', desc: 'Apenas batata', price: 16.00, category: 'batata' },
  { id: 'b5', name: 'Batata Frita 350g', desc: 'Com catupiry e bacon', price: 22.00, category: 'batata' },
  { id: 'b6', name: 'Batata Frita 350g', desc: 'Com cheddar e bacon', price: 22.00, category: 'batata' },

  //bebidas
  { id: 'beb1', name: 'Água com gás', desc: '500ml', price: 3.50, category: 'bebida' },
  { id: 'beb2', name: 'Água mineral', desc: '500ml', price: 3.00, category: 'bebida' },
  { id: 'beb3', name: 'Coca Cola Orginial', desc: '600ml', price: 7.00, category: 'bebida' },
  { id: 'beb4', name: 'Coca Cola Lata', desc: 'Lata 350ml', price: 6.00, category: 'bebida' },
  { id: 'beb5', name: 'Coca Cola Pet', desc: '1L', price: 8.50, category: 'bebida' },
  { id: 'beb6', name: 'Coca Cola Original', desc: 'Lata S/Açúcar 350ml', price: 6.00 , category: 'bebida' },
  { id: 'beb7', name: 'Coca Cola Pet', desc: 'S/Açúcar', price: 8.50 , category: 'bebida' },
  { id: 'beb8', name: 'Fanta Laranja', desc: 'Lata 350ml', price: 6.00, category: 'bebida' },
  { id: 'beb9', name: 'Fanta Laranja', desc: '1L', price: 8.50, category: 'bebida' },
  { id: 'beb10', name: 'Guaraná Antartica MINI', desc: '200ml', price: 3.00 , category: 'bebida' },
  { id: 'beb11', name: 'H2o Limoneto', desc: '500ml', price: 7.00 , category: 'bebida'},
  { id: 'beb12', name: 'MINI coca', desc: 'S/Açúcar 220ml', price: 4.00 , category: 'bebida' },
  { id: 'beb13', name: 'Pepsi MINI', desc: '200ml', price: 3.00 , category: 'bebida' },
  { id: 'beb14', name: 'Guaraná Pet', desc: '1L', price: 8.50 , category: 'bebida' },
  { id: 'beb15', name: 'H2o Limão C/gás', desc: '500ml', price: 7.00 , category: 'bebida' },
  { id: 'beb16', name: 'Skinka Laranja', desc: '450ml', price: 6.00 , category: 'bebida' },
  { id: 'beb17', name: 'Suco Del Valle', desc: 'Laranja 450ml', price: 6.00 , category: 'bebida' },
  { id: 'beb18', name: 'Suco Del Valle', desc: 'Uva 450ml', price: 6.00 , category: 'bebida' },
  { id: 'beb19', name: 'Sukita', desc: 'Laranja 1L', price: 8.50 , category: 'bebida' },
  { id: 'beb20', name: 'Coca Cola Pet', desc: '200ml', price: 4.00 , category: 'bebida' },
  { id: 'beb21', name: 'Coca Cola Pet', desc: 'S/Açúcar 200ml', price: 4.00 , category: 'bebida' },
  { id: 'beb22', name: 'Coca Cola Pet', desc: '2L', price: 15.00 , category: 'bebida' },
  { id: 'beb23', name: 'Pepsi Black Lata', desc: 'S/Açúcar 350ml', price: 6.00 , category: 'bebida' },

  // 🌿 MACAXEIRA

  { id: 'mx1', name: 'Macaxeira Frita c/ Bode', desc: 'Porção de macaxeira frita, bode frito e queijo.', price: 25.00, category: 'macaxeira' },
  { id: 'mx2', name: 'Macaxeira c/ Carne do Sol', desc: 'Porção de macaxeira frita, carne do sol e queijo.', price: 25.00, category: 'macaxeira' },
  { id: 'mx3', name: 'Macaxeira Mista', desc: 'Porção de macaxeira frita com carne do sol, filé de frango, toscana e queijo.', price: 28.00, category: 'macaxeira' },

  //Cuscuz
  { id: 'c1', name: 'Cuscuz com Tripa', desc: 'Cuscuz com tripa de bode frita e vinagrete', price: 25.00 , category: 'cuscuz' },
  { id: 'c2', name: 'Carne de Sol', desc: 'Cuscuz com carne de sol, queijo e vinagrete', price: 25.00 , category: 'cuscuz' },
  { id: 'c3', name: 'Carne de Sol Acebolada', desc: 'Cuscuz com carne de sol acebolada, queijo e vinagrete', price: 17.00 , category: 'cuscuz' },
  { id: 'c4', name: 'Cabra Macho', desc: 'Cuscuz Recheado (P), frango, calabresa, carne de sol, ovo, catupiry, manteiga de garrafa e vinagrete  ', price: 15.00 , category: 'cuscuz' },
  { id: 'c5', name: 'Bode Frito', desc: 'Porção do cuscuz, porção de bode frito, vinagrete', price: 25.00 , category: 'cuscuz' },
  { id: 'c7', name: 'Cabra Macho', desc: 'Cuscuz Recheado (G), frango, calabresa, carne de sol, ovo, catupiry, manteiga de garrafa e vinagrete  ', price: 20.00 , category: 'cuscuz' },
  {id: 'c8', name: 'Recheado de Frango', desc: 'Cuscuz (M) Frango desfiado, catupiry e vinagrete', price: 16.00, category: 'cuscuz'},
  {id: 'c9', name: 'Recheado de Frango', desc: 'Cuscuz (P) Frango desfiado, catupiry e vinagrete', price: 13.00, category: 'cuscuz'},
  {id: 'c10', name: 'Romeu e Julieta', desc: 'Requeião Cremoso original, goiabada cremosa e queijo coalho', price: 13.50, category: 'cuscuz'},
  {id: 'c11', name: 'Cuscuz Caipira', desc: 'Cuscuz (P), Ovo frito, queijo coalho, manteiga de garrafa e vinagrete', price: 13.00, category: 'cuscuz'},
  {id: 'c12', name: 'Cuscuz Caipira', desc: 'Cuscuz (M), Ovo frito, queijo coalho, manteiga de garrafa e vinagrete', price: 16.00, category: 'cuscuz'},



];


// Carrinho
let carrinho = [];

// Mostra os produtos da categoria
function mostrarCategoria(cat) {
  const cardapioDiv = document.getElementById('cardapio');
  cardapioDiv.innerHTML = '';
  const itens = cardapio.filter(item => item.category === cat);
  itens.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <p><b>R$ ${item.price.toFixed(2)}</b></p>
      <button onclick="adicionarCarrinho('${item.id}')">Adicionar</button>
    `;
    cardapioDiv.appendChild(div);
  });
}

// Adiciona item ao carrinho
function adicionarCarrinho(id) {
  const item = cardapio.find(i => i.id === id);
  carrinho.push(item);
  atualizarCarrinho();
}

// Remove item do carrinho
function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

// Atualiza lista e total
function atualizarTipoPedido() {
  const tipo = document.getElementById('tipoPedido').value;
  const divBairro = document.getElementById('divBairro');
  const enderecoInput = document.getElementById('enderecoCliente');

  if (tipo === 'retirada') {
    divBairro.style.display = 'none';
    enderecoInput.placeholder = 'Endereço (não necessário para retirada)';
  } else {
    divBairro.style.display = 'block';
    enderecoInput.placeholder = 'Rua, número, ponto de referência...';
  }

  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById('itens-carrinho');
  const total = document.getElementById('total');
  const tipo = document.getElementById('tipoPedido') ? document.getElementById('tipoPedido').value : 'entrega';
  const bairroSelect = document.getElementById('bairroCliente');
  const valorEntrega = tipo === 'entrega' ? parseFloat(bairroSelect?.value || 0) : 0;

  lista.innerHTML = '';
  let soma = 0;

  carrinho.forEach((item, index) => {
    soma += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    
    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.style.marginLeft = '10px';
    btnRemover.onclick = () => removerDoCarrinho(index);
    
    li.appendChild(btnRemover);
    lista.appendChild(li);
  });

  const totalComEntrega = soma + valorEntrega;

  if (tipo === 'retirada') {
    total.textContent = `Total: R$ ${soma.toFixed(2)} (Retirada no local)`;
  } else {
    total.textContent = `Total: R$ ${totalComEntrega.toFixed(2)} (Inclui entrega R$ ${valorEntrega.toFixed(2)})`;
  }
}

// Exibe campo de troco se for dinheiro
function mostrarCampoTroco() {
  const pagamento = document.getElementById('pagamentoCliente').value;
  const campoTroco = document.getElementById('campoTroco');
  campoTroco.style.display = pagamento === 'Dinheiro' ? 'block' : 'none';
}

// Finaliza pedido e envia pro WhatsApp
document.getElementById('finalizar').addEventListener('click', () => {
  if (carrinho.length === 0) {
    alert('Carrinho vazio!');
    return;
  }

  const nome = document.getElementById('nomeCliente').value.trim();
  const endereco = document.getElementById('enderecoCliente').value.trim();
  const tipo = document.getElementById('tipoPedido').value;
  const pagamento = document.getElementById('pagamentoCliente').value;
  const troco = document.getElementById('trocoCliente') ? document.getElementById('trocoCliente').value.trim() : '';
  const obs = document.getElementById('obsCliente').value.trim();
  const bairroSelect = document.getElementById('bairroCliente');
  const valorEntrega = tipo === 'entrega' ? parseFloat(bairroSelect?.value || 0) : 0;

  if (!nome || !pagamento) {
    alert('⚠️ Por favor, preencha nome e forma de pagamento antes de finalizar o pedido.');
    return;
  }

  if (tipo === 'entrega' && (!endereco || !bairroSelect.value)) {
    alert('⚠️ Informe o endereço e o bairro para entrega.');
    return;
  }

  let msg = `*🍔 Novo Pedido - Nosso Lanche*\n\n`;
  msg += carrinho.map(i => `• ${i.name} - R$ ${i.price.toFixed(2)}`).join('\n');

  const totalProdutos = carrinho.reduce((t, i) => t + i.price, 0);
  const totalFinal = totalProdutos + valorEntrega;
  const nomeBairro = tipo === 'entrega'
    ? bairroSelect.options[bairroSelect.selectedIndex]?.text || 'Não informado'
    : 'Retirada no local';

  msg += `\n\n🧾 *Resumo do Pedido*\n`;
  msg += `🛍️ *Tipo:* ${tipo === 'entrega' ? 'Entrega' : 'Retirada no local'}\n`;

  if (tipo === 'entrega') {
    msg += `🚚 *Bairro:* ${nomeBairro}\n`;
    msg += `💰 *Taxa de entrega:* R$ ${valorEntrega.toFixed(2)}\n`;
  }

  msg += `\n*Total:* R$ ${totalFinal.toFixed(2)}\n\n`;
  msg += `👤 *Nome:* ${nome}\n`;

  if (tipo === 'entrega') {
    msg += `🏠 *Endereço:* ${endereco}\n`;
  }

  msg += `💳 *Pagamento:* ${pagamento}\n`;

  if (pagamento === 'Dinheiro') {
    msg += troco ? `💵 *Troco para:* R$ ${troco}\n` : `💵 *Troco:* não informado\n`;
  }

  if (obs) msg += `📝 *Observações:* ${obs}\n`;

  const telefone = '5575991235016'; // DDI + DDD + número
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
});
