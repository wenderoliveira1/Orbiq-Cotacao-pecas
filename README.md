# Orbic V2.0 — Orçamentos e Cotações

Aplicativo web interno em **Google Apps Script + Google Sheets** para registrar atendimentos, montar orçamentos e organizar cotações com fornecedores.

## Privacidade

Este repositório público **não contém nomes nem números reais de fornecedores**. Os contatos devem ser cadastrados pela interface do aplicativo ou diretamente na aba `Fornecedores` da planilha vinculada.

## Recursos

- Cadastro de montador, cliente e veículo
- Registro de serviços solicitados
- Inclusão de peças e materiais por categoria
- Geração de grupos de cotação
- Abertura de mensagens prontas no WhatsApp
- Registro de respostas, valores e prazo de entrega
- Escolha do fornecedor vencedor
- Acompanhamento de status do orçamento
- Cadastro e ativação/desativação de fornecedores
- Painel com indicadores básicos

## Categorias iniciais

- Mecânica
- Chassi - Paralelo/Original
- Chassi - Ferro Velho
- Pneus
- Vidros
- Óleos e Lubrificantes
- Outros

## Instalação

1. Crie uma Planilha Google.
2. Abra **Extensões → Apps Script**.
3. Crie os arquivos `.gs` e `.html` com os mesmos nomes deste repositório.
4. Se usar o manifesto, ative a exibição do `appsscript.json` nas configurações do Apps Script e substitua seu conteúdo pelo arquivo deste repositório.
5. Execute `setupApp()` uma vez e autorize as permissões.
6. Cadastre os fornecedores reais somente na planilha/interface.
7. Publique em **Implantar → Nova implantação → Aplicativo da Web**.

## Estrutura criada na planilha

O sistema cria automaticamente as abas:

- `Orcamentos`
- `Itens_Orcamento`
- `Fornecedores`
- `Cotacoes`
- `Configuracoes`

## WhatsApp

A V2.0 abre mensagens prontas via `wa.me`. O envio é confirmado pelo usuário no WhatsApp. Disparo automático em massa não faz parte desta versão.

## Versão

**Orbic V2.0.0**
