def ceasar(text : str, key : int) -> str:
    result : str= ""
    for char in text :
        c = ord(char)
        enc_char = chr(c +key)
        result += enc_char
    return result

