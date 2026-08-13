const APP = {
  VERSION: '2.0.0',
  COMPANY_NAME: 'Orbic',
  SHEETS: {
    BUDGETS: 'Orcamentos',
    ITEMS: 'Itens_Orcamento',
    SUPPLIERS: 'Fornecedores',
    QUOTES: 'Cotacoes',
    SETTINGS: 'Configuracoes',
  },
  CATEGORIES: [
    'Mecânica',
    'Chassi - Paralelo/Original',
    'Chassi - Ferro Velho',
    'Pneus',
    'Vidros',
    'Óleos e Lubrificantes',
    'Outros',
  ],
  BUDGET_STATUSES: [
    'Aguardando avaliação',
    'Aguardando cotação',
    'Em orçamento',
    'Aprovado',
    'Reprovado',
    'Aguardando peças',
    'Em execução',
    'Finalizado',
  ],
};

const HEADERS = {
  budgets: [
    'ID', 'Data/Hora', 'Montador', 'Cliente', 'Telefone', 'Placa', 'Veículo',
    'Chassi/VIN', 'KM', 'Serviços solicitados', 'Observações', 'Urgência',
    'Status', 'Necessita cotação', 'Categorias cotadas', 'Valor final',
    'Criado por', 'Atualizado em'
  ],
  items: [
    'ID Item', 'ID Orçamento', 'Categoria', 'Item/Peça', 'Quantidade', 'Unidade',
    'Marca/Especificação', 'Observações', 'Status compra', 'Fornecedor escolhido',
    'Valor escolhido', 'Criado em', 'Atualizado em'
  ],
  suppliers: [
    'ID Fornecedor', 'Categoria', 'Fornecedor', 'WhatsApp', 'Ativo',
    'Observações', 'Criado em', 'Atualizado em'
  ],
  quotes: [
    'ID Cotação-Fornecedor', 'ID Grupo Cotação', 'ID Orçamento', 'Categoria',
    'ID Fornecedor', 'Fornecedor', 'WhatsApp', 'Mensagem', 'Status', 'Aberto em',
    'Marca/Opção', 'Valor', 'Prazo/Entrega', 'Observação da resposta', 'Vencedor',
    'Atualizado em'
  ],
  settings: ['Chave', 'Valor', 'Descrição'],
};

function doGet() {
  setupApp_();
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Orbic | Orçamentos e Cotações')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, viewport-fit=cover');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/** Execute manualmente uma vez, se quiser preparar a planilha antes da primeira abertura. */
function setupApp() {
  setupApp_();
  return 'Orbic V2.0 configurado com sucesso.';
}

function getInitialData() {
  setupApp_();
  const settings = getSettings_();
  return {
    version: APP.VERSION,
    companyName: APP.COMPANY_NAME,
    categories: APP.CATEGORIES,
    statuses: APP.BUDGET_STATUSES,
    settings: settings,
    recentBudgets: listBudgets_(15),
    quoteGroups: listQuoteGroups_(20),
    suppliers: listSuppliers_(),
    dashboard: getDashboard_(),
  };
}
