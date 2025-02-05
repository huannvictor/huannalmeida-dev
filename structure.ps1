# Diretório raiz do projeto
$dir = "./"

# Pastas a serem omitidas
$omitir = @("node_modules", ".next", ".git", "dist")

# Função recursiva para listar diretórios e arquivos com formatação
function Listar-Diretorio {
    param (
        [string]$caminho,
        [int]$nivel = 0,
        [bool]$ultimo = $false
    )
    
    # Obtém todos os itens (arquivos e pastas) no diretório atual
    $itens = Get-ChildItem -Path $caminho | Where-Object { $omitir -notcontains $_.Name }
    
    # Conta o número total de itens para determinar o último item
    $totalItens = $itens.Count
    $indice = 0

    foreach ($item in $itens) {
        $indice++
        $ultimoItem = ($indice -eq $totalItens)

        # Constrói a indentação baseada no nível
        $indentacao = ""
        for ($i = 1; $i -lt $nivel; $i++) {
            $indentacao += "│   "
        }

        # Adiciona o caractere de conexão ou final
        if ($nivel -gt 0) {
            if ($ultimo) {
                $indentacao += "└── "
            } else {
                $indentacao += "├── "
            }
        }

        # Imprime o nome do item com a indentação
        Write-Output ($indentacao + $item.Name)

        # Se for uma pasta, chama a função recursivamente
        if ($item.PSIsContainer) {
            Listar-Diretorio -caminho $item.FullName -nivel ($nivel + 1) -ultimo $ultimoItem
        }
    }
}

# Chama a função para gerar a estrutura e salva a saída em um arquivo
Listar-Diretorio -caminho $dir | Out-File -FilePath "project_structure.txt" -Encoding utf8

Write-Host "Estrutura salva em 'project_structure.txt'"