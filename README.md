
# Git Flow - Testes

Repositório destinado à prática dos principais comandos do Git e GitFlow.

## 1. Configuração do Git

- `git config --global user.name "Nome"` - Configura o nome do usuário.
- `git config --global user.email "Email"` - Configura o e-mail do usuário.

## 2. Criação e clonagem de repositórios

- `git init` - Inicializa um repositório Git.
- `git clone URL` - Clona um repositório remoto.

## 3. Gerenciamento de arquivos e commits

- `git status` - Verifica o estado dos arquivos.
- `git add arquivo` - Adiciona um arquivo para o próximo commit.
- `git add .` - Adiciona todas as alterações.
- `git commit -m "mensagem"` - Cria um commit.
- `git log` - Exibe o histórico de commits.
- `git diff` - Exibe as diferenças entre alterações.

## 4. Envio e atualização de arquivos

- `git push` - Envia os commits para o repositório remoto.
- `git pull` - Busca e integra as alterações do repositório remoto.
- `git fetch` - Busca alterações remotas sem integrá-las automaticamente.
- `git remote -v` - Exibe os repositórios remotos conectados.

## 5. Gerenciamento de branches

- `git branch` - Lista as branches.
- `git branch nome` - Cria uma nova branch.
- `git checkout nome` - Troca de branch.
- `git checkout -b nome` - Cria e acessa uma branch.
- `git switch nome` - Troca de branch.
- `git merge nome` - Integra uma branch à branch atual.
- `git branch -d nome` - Exclui uma branch local.

## 6. Correção de commits

- `git commit --amend -m "nova mensagem"` - Corrige a mensagem do último commit.
- `git revert ID` - Cria um novo commit que desfaz um commit anterior.
- `git reset --soft HEAD~1` - Desfaz o último commit local mantendo as alterações.
- `git restore arquivo` - Descarta alterações não preparadas de um arquivo.

## 7. GitFlow

GitFlow é um modelo de organização de branches utilizado no desenvolvimento de software.

### Principais branches

- main: contém a versão estável do projeto.
- develop: contém as funcionalidades em desenvolvimento.
- feature: utilizada para desenvolver novas funcionalidades.
- release: utilizada para preparar novas versões.
- hotfix: utilizada para corrigir problemas urgentes.

### Principais comandos do GitFlow

- `git flow init` - Inicializa o GitFlow.
- `git flow feature start nome` - Inicia uma funcionalidade.
- `git flow feature finish nome` - Finaliza uma funcionalidade.
- `git flow release start versao` - Inicia uma nova versão.
- `git flow release finish versao` - Finaliza uma versão.
- `git flow hotfix start nome` - Inicia uma correção urgente.
- `git flow hotfix finish nome` - Finaliza uma correção urgente.

Os comandos git flow exigem uma extensão GitFlow instalada.
