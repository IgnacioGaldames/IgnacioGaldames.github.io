module Jekyll
  module BinaryFilter
    # Convierte una cadena a una representación binaria (por bytes).
    # Uso en Liquid: {{ "Hola" | to_binary }}
    # Opcionalmente se puede pasar la codificación y el separador:
    # {{ texto | to_binary: "UTF-8", " " }}
    def to_binary(input, encoding = 'UTF-8', separator = ' ')
      return '' if input.nil?
      str = input.to_s.encode(encoding, invalid: :replace, undef: :replace, replace: '?')
      str.bytes.map { |b| b.to_s(2).rjust(8, '0') }.join(separator)
    end
  end
end

Liquid::Template.register_filter(Jekyll::BinaryFilter)
