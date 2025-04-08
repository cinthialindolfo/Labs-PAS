# busquei aplicar as duas técnicas de criptografia de substituição usando a cifra de cezar e a transformação usando a inversa

# IMPORTAÇÃO E DEFINIÇÃO DA CLASSE

import string # importação da tabela ASCII

class CriptografiaMista: # nome da classe sugestiva porque é feita com método de substituição e transformação
    def __init__(self, key=-6): # key é o padrão da chave 
        self.key = key
        self.alphabet = string.ascii_letters + string.digits  # temos letras maiusculas, minusculas e números

# COMO A CRIPTOGRAFIA É APLICADA 

    def criptografar(self, plaintext): # método para criptografar a mensagem
        criptografar = [] # irá criar uma lista para armazenar os caracteres criptografados
        for char in plaintext: # verefica cada caractere da mensagem que vai ser criptografada
            if char in self.alphabet: # verefica se o caractere está no alfabeto
                shift = self.key % len(self.alphabet) # vai calcular o deslocamento que a chave vai fazer ajustado pelo comprimento do alfabeto
                new_index = (self.alphabet.index(char) + shift) % len(self.alphabet) # calcula um novo indice do caractere após aplicar o deslocamento
                criptografar.append(self.alphabet[new_index]) # adiciona o caractere criptografado a lista
            else:
                criptografar.append(char)  # Mantém caracteres não presentes no alfabeto inalterados
        criptografar_text = ''.join(criptografar) # converte a lista de caracteres criptografados em uma string
        return criptografar_text[::-1]  # Inverte o texto criptografado antes de retorná-la

# COMO A DESCRIPTOGRAFIA É APLICADA

    def descriptograf(self, ciphertext): # método para descriptograr a mensagem
        ciphertext = ciphertext[::-1] # irá primeiro inverter o texto criptografado
        descriptografar = [] # irá criar uma lista para armazenar os caracteres descriptografados
        for char in ciphertext: # verefica cada caractere da mensagem que vai ser descriptografada
            if char in self.alphabet: # verefica se o caractere está no alfabeto
                shift = self.key % len(self.alphabet) # vai calcular o deslocamento
                new_index = (self.alphabet.index(char) - shift) % len(self.alphabet) # vai calcular o novo índice do caractere após aplicar o deslocamento negativo
                descriptografar.append(self.alphabet[new_index])  # adiciona o caractere descriptografado a lista
            else:
                descriptografar.append(char)  # Mantém caracteres não presentes no alfabeto inalterados
        return ''.join(descriptografar)  # converte o texto descriptografado em string e retorna

# UTILIZANDO A CLASSE 

key = -6 # a chave definida para criptografar
cipher = CriptografiaMista(key) # cria uma instância da classe com a chave formecida

mensagem_original = input("Digite a mensagem para criptografar: ") # pede pro usuário digitar a mensagem que deseja criptografar
mensagem_criptografada = cipher.criptografar(mensagem_original) # criptografa a mensagem digitada

print(f"Mensagem Criptografada: {mensagem_criptografada}") # exibe a mensagem criptografada

mensagem_para_descriptografar = input("Digite a mensagem criptografada para descriptografar: ") # pedi pro usuário digitar a emnsagem criptografada para descriptografar

mensagem_descriptografada = cipher.descriptograf(mensagem_para_descriptografar) # descriptografa a mensagem

print(f"Mensagem Descriptografada: {mensagem_descriptografada}") # exibe a mensagem descriptografada