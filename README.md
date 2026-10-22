<!-- RLR · Ricardo López Reyero · rev 181218 -->
# Perfil

**Ver en vivo:** https://perfil.capitaltorreon.com/quedada_fin_de_semana

Perfiles de puesto de la casa, una página por vacante, donde la persona lee de qué se trata y llena su solicitud ahí mismo.

## Quedada de fin de semana

Una misma página que se puede leer de dos maneras, con un interruptor arriba:

- **Sobrio** (`?p=bn`): blanco y negro, directo. Para quien llega del anuncio en blanco y negro.
- **Cálido** (`?p=calido`): crema y dorado, más cercano. Para quien llega del anuncio con la familia.

La variación se pone en la liga del anuncio; la persona puede cambiarla y la página recuerda su elección. Sin parámetro abre en cálido.

La solicitud es el formulario «Empleada Domestica Inicio Fin V1» del CRM (subcuenta Talento), embebido en línea: las respuestas llegan al CRM y de ahí al tablero Talento. Al terminar, el propio formulario pide las tres referencias.

## Cómo se publica

Worker de Cloudflare solo con archivos estáticos (`public/`), dominio `perfil.capitaltorreon.com`.

```bash
cd ~/Desktop/HTML/Perfil && npx wrangler deploy
```

Para un puesto nuevo: copiar `public/quedada_fin_de_semana.html` con otro nombre, cambiar textos y el id del formulario, y agregarlo a `public/index.html`.

Hecho en Torreón por Ricardo López Reyero.
