def ordenar_numeros(num1, num2, num3):
    # Cria uma lista com os números na ordem em que foram lidos
    numeros_lidos = [num1, num2, num3]

    # Cria uma lista com os números ordenados
    numeros_ordenados = sorted(numeros_lidos)

    # Imprime os números ordenados
    for num in numeros_ordenados:
        print(num)

    # Imprime uma linha em branco
    print()

    # Imprime os números na ordem em que foram lidos
    for num in numeros_lidos:
        print(num)

# Uso da função
ordenar_numeros(7, 21, -14)