# Mini Curso de Git e GitHub

## Parte 1. Git

## 1. Verificar instalação do Git

Verifica se o Git está instalado e a versão.

```bash
git -v
```

Forma mais comum:

```bash
git --version
```

## 2. Ajuda e lista de comandos

Inserir comando help para listar os comandos disponíveis:

```bash
git help
```

Listar ajuda resumida de comandos:

```bash
git --help
```

Ajuda de um comando específico:

```bash
git help commit
```

ou

```bash
git commit --help
```

## 3. Configuração inicial do Git

Verifica usuário configurado no Git:

```bash
git config --global user.email
git config --global user.name
```

Define o email do usuário:

```bash
git config --global user.email "you@example.com"
```

Define o nome do usuário:

```bash
git config --global user.name "nome"
```

Apaga o email do usuário:

```bash
git config --global --unset user.email
```

Apaga o nome do usuário:

```bash
git config --global --unset user.name
```

Ver todas as configurações globais:

```bash
git config --global --list
```

Ver de onde vem cada configuração:

```bash
git config --list --show-origin
```

## 4. Iniciar um repositório local

Inicializa o Git no projeto local:

```bash
git init
```

Verifica o estado atual do repositório:

```bash
git status
```

## 5. Fluxo básico de versionamento

Adicionar todos os arquivos:

```bash
git add .
```

Adicionar apenas um arquivo:

```bash
git add <arquivo>
```

Faz um commit com uma mensagem descritiva sobre as alterações realizadas:

```bash
git commit -m "descrição do commit"
```

Adicionar e commitar arquivos já rastreados:

```bash
git commit -am "descrição do commit"
```

Ver diferenças antes do commit:

```bash
git diff
```

Ver diferenças do que já foi para staging:

```bash
git diff --staged
```

## 6. Histórico

Ver histórico resumido:

```bash
git log --oneline
```

Ver histórico completo:

```bash
git log
```

Ver histórico com gráfico das branches:

```bash
git log --oneline --graph --all
```

Ver movimentações do `HEAD`:

```bash
git reflog
```

## 7. Desfazer alterações

Remover arquivo da área de staging:

```bash
git restore --staged <arquivo>
```

Descartar alterações locais de um arquivo:

```bash
git restore <arquivo>
```

Voltar para um commit usando o `reflog`:

```bash
git reset --hard "HEAD@{<numero do commit>}"
```

ou

```bash
git reset --hard <hash>
```

Observação importante:
`git reset --hard` apaga alterações locais não commitadas. Use com cuidado.

## 8. Trabalhando com branches

Lista as branches:

```bash
git branch
```

Cria uma nova branch:

```bash
git branch <nome-da-branch>
```

Muda para outra branch:

```bash
git checkout <nome-da-branch>
```

Cria e muda para a nova branch:

```bash
git checkout -b <nome-da-branch>
```

Forma mais atual para trocar de branch:

```bash
git switch <nome-da-branch>
```

Forma mais atual para criar e trocar de branch:

```bash
git switch -c <nome-da-branch>
```

## 9. Merge

Volta para a branch principal:

```bash
git checkout main
```

ou

```bash
git switch main
```

Faz o merge de outra branch na branch atual:

```bash
git merge <nome-da-branch>
```

Se houver conflito, o Git pedirá para resolver manualmente os arquivos antes do commit final.

## 10. Excluir branches locais

Deleta a branch após o merge:

```bash
git branch -d <nome-da-branch>
```

Deleta a branch mesmo sem merge:

```bash
git branch -D <nome-da-branch>
```

## 11. Comandos importantes que estavam faltando

Ver arquivos ignorados e estado detalhado:

```bash
git status -sb
```

Renomear a branch atual:

```bash
git branch -m <novo-nome>
```

Mostrar quem alterou cada linha de um arquivo:

```bash
git blame <arquivo>
```

Mostrar detalhes de um commit específico:

```bash
git show <hash>
```

## Parte 2. GitHub

## 12. O que é GitHub

GitHub é uma plataforma para hospedar repositórios Git na nuvem e facilitar colaboração entre pessoas e times.

Enquanto o **Git** controla versões localmente, o **GitHub** ajuda a publicar, compartilhar, revisar e integrar mudanças remotamente.

## 13. Criar um repositório no GitHub

Passos básicos no site do GitHub:

1. Fazer login na conta.
2. Clicar em `New repository`.
3. Definir nome do repositório.
4. Escolher se será público ou privado.
5. Criar o repositório.

Observação importante:
Se o projeto já existe localmente, normalmente é melhor criar o repositório remoto vazio, sem `README`, sem `.gitignore` e sem licença, para evitar conflitos iniciais.

## 14. Clonar um repositório do GitHub

Clona um projeto remoto para a máquina local:

```bash
git clone <url-do-repositorio>
```

Exemplo:

```bash
git clone https://github.com/usuario/repositorio.git
```

## 15. Conectar um projeto local ao GitHub

Verificar repositórios remotos configurados:

```bash
git remote -v
```

Adicionar o repositório remoto principal:

```bash
git remote add origin <url-do-repositorio>
```

Exemplo:

```bash
git remote add origin https://github.com/usuario/repositorio.git
```

Alterar a URL do remoto:

```bash
git remote set-url origin <url-do-repositorio>
```

Remover um remoto:

```bash
git remote remove origin
```

## 16. Enviar código para o GitHub

Enviar a branch principal para o repositório remoto:

```bash
git push -u origin main
```

Se a branch principal for `master`:

```bash
git push -u origin master
```

Depois do primeiro envio, normalmente basta:

```bash
git push
```

## 17. Atualizar projeto local com mudanças do GitHub

Baixar alterações do repositório remoto e integrar na branch atual:

```bash
git pull
```

Baixar alterações sem integrar automaticamente:

```bash
git fetch
```

Comparar a branch local com a remota:

```bash
git status
```

ou

```bash
git log --oneline --graph --all
```

## 18. Trabalhando com branches no GitHub

Enviar uma nova branch para o GitHub:

```bash
git push -u origin <nome-da-branch>
```

Listar branches locais e remotas:

```bash
git branch -a
```

Baixar referências atualizadas do remoto:

```bash
git fetch --all
```

Criar uma branch local baseada em uma branch remota:

```bash
git checkout -b <nome-da-branch> origin/<nome-da-branch>
```

ou, com sintaxe mais atual:

```bash
git switch -c <nome-da-branch> origin/<nome-da-branch>
```

## 19. Pull Request

O Pull Request, também chamado de PR, é uma solicitação para revisar e juntar alterações de uma branch em outra branch no GitHub.

Fluxo comum:

1. Criar uma branch local.
2. Fazer alterações no projeto.
3. Fazer `git add` e `git commit`.
4. Enviar a branch com `git push -u origin <nome-da-branch>`.
5. Abrir o Pull Request no GitHub.
6. Revisar, comentar e aprovar.
7. Fazer o merge no GitHub.

## 20. Atualizar a branch com mudanças da principal

Trocar para a branch principal:

```bash
git switch main
```

Atualizar a branch principal local:

```bash
git pull origin main
```

Voltar para a branch de trabalho:

```bash
git switch <nome-da-branch>
```

Trazer mudanças da principal para a branch atual:

```bash
git merge main
```

## 21. Excluir branches remotas

Deletar branch remota no GitHub:

```bash
git push origin --delete <nome-da-branch>
```

Depois, se quiser, apagar a branch local:

```bash
git branch -d <nome-da-branch>
```

## 22. Comandos importantes de GitHub que costumam faltar

Ver detalhes do remoto:

```bash
git remote show origin
```

Baixar todas as atualizações e limpar referências antigas:

```bash
git fetch --prune
```

Renomear a branch principal local antes de enviar:

```bash
git branch -M main
```

## 23. Boas práticas no GitHub

- Manter a branch `main` estável.
- Criar uma branch para cada funcionalidade ou correção.
- Fazer commits pequenos e bem descritos.
- Abrir Pull Request com título claro.
- Revisar o código antes de aprovar merge.
- Fazer `pull` ou `fetch` com frequência para evitar conflitos grandes.
